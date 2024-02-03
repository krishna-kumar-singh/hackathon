import conf from '../conf/conf.js';
import { Client, ID , Databases,Storage,Query} from "appwrite";

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


    // file upload
    // async uploadFile(file){
    //     try {
    //         return await this.bucket.createFile(
    //             conf.appwriteBucketId,
    //             ID.unique(),
    //             file
    //             )
    //     } catch (error) {
    //         console.log('app write service :: uploadFile error ', error)
    //     }
    // }

    
    async createRequest(
        {
            slug,
            name,
            gender,
            qualification,
            experience,
            contact,
            address,
            modeOfJob,
            timeOfJob,
            potofolio,
            date,
            jobType,
            about,
            userId
        }){
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, {
                name,
                gender,
                qualification,
                experience,
                contact,
                address,
                modeOfJob,
                timeOfJob,
                potofolio,
                date,
                jobType,
                about,
                userId
            });
        } catch (error) {
            console.log('app write service :: createPost error ', error)
        }
    }

    async createRecuitmentRequest(
        {
            slug,
            modeOfJob,
            timeOfJob,
            jobType,
            contact,
            address,
            date,
            salary,
            about,
            userId
        }){
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionRecuitmentId, slug, {
                modeOfJob,
                timeOfJob,
                jobType,
                contact,
                address,
                date,
                salary,
                about,
                userId
            });
        } catch (error) {
            console.log('app write service :: createRecuitment error ', error)
        }
    }
    
    
    // async getRequest(slug){
    //     try {
    //         return await this.databases.getDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug)
    //     } catch (error) {
    //         console.log('app write service :: getPost error ', error)
    //     }
    //     return false
    // }
    


    async getRequests(){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                
            )
        } catch (error) {
            console.log("Appwrite serive :: getRequests :: error", error);
            return false
        }
    }
    async getRequestsOfRecuitment(){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionRecuitmentId,
            )
        } catch (error) {
            console.log("Appwrite serive :: getRequestsofRecuitment :: error", error);
            return false
        }
    }
}
const service = new Service()
export default service
