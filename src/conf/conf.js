const conf={
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionUserId:String(import.meta.env.VITE_APPWRITE_COLLECTION_USER_ID),
    appwriteCollectionDriverId:String(import.meta.env.VITE_APPWRITE_COLLECTION_DRIVER_ID),
    appwriteBucketId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID),

}
export default conf