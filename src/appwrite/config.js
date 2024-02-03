import conf from '../conf/conf.js';
import { Client, ID , Databases,Storage} from "appwrite";

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
            slug,
            gender,
            patientName,
            address,
            contact,
            tragedyOccur,
            age,
            date,
        }){
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionUserId, slug, {
            patientName,
            address,
            gender,
            contact,
            tragedyOccur,
            age,
            date,
            });
        } catch (error) {
            console.log('app write service :: createPost error ', error)
        }
    }
    
    async ambulanceDriverForm(
        {

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
