import mongoose from "mongoose";

export default async function connectToMongodb(url){
    return mongoose.connect(url);
}