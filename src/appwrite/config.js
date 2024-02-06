import conf from '../conf/conf.js';
import { Client, ID , Databases,Storage} from "appwrite";
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
        this.bucket=new Storage(this.client)
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



    async ambulanceDriverForm(
        {
            driverLatitude,
            driverLongitude,
            name,
            ambulanceNo,
            address,
            contact,
            date,
            userId
        }){
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionDriverId, ID.unique(), {
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
            console.log('app write service :: createPost error ', error)
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
