import conf from '../conf/conf.js';
import { Client, ID , Databases} from "appwrite";
import { v4 as uuidv4 } from 'uuid';

export class Service{
    client = new Client()
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl) // Your API Endpoint
        .setProject(conf.appwriteProjectId);    // Your project ID
        this.databases=new Databases(this.client)
    }
 
    async createRequest(
        {
            gender,
            patientName,
            address,
            contact,
            tragedyOccur,
            age,
            date,
        }){
        try {
            const unique=uuidv4()
            return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionUserId,unique, {
            patientName,
            address,
            gender,
            contact,
            tragedyOccur,
            age,
            date,
            unique:unique,
            status:false,
            });
        } catch (error) {
            console.log('app write service :: createPost error ', error)
        }
    }


    async updateUserForm(unique, {status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionUserId,
                unique,
                {
                status
                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }



    async ambulanceDriverForm({
        driverLatitude,
        driverLongitude,
        name,
        ambulanceNo,
        address,
        contact,
        date,
        userId
    }) {
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionDriverId, userId, {
                name,
                ambulanceNo,
                address,
                contact,
                date,
                driverLatitude,
                driverLongitude,
                userId
            });
        } catch (error) {
            if (error.message && error.message.includes('Document with the requested ID already exists')) {
                // Display an alert message indicating that a user with that ID already exists
                alert('A user with this ID already exists.');
            } else {
                // For other errors, log the error for debugging purposes
                console.log('app write service :: createPost error ', error);
            }
        }
    }

    async deleteDriverForm(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionDriverId,
                slug
            
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deletePost :: error", error);
            return false
        }
    }
    

    async getUserForms(){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionUserId,
                
            )
        } catch (error) {
            console.log("Appwrite serive :: getUserForms :: error", error);
            return false
        }
    }
    async getDriverForms(){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionDriverId,
                
            )
        } catch (error) {
            console.log("Appwrite serive :: getDriverForms :: error", error);
            return false
        }
    }
}
const service = new Service()
export default service
