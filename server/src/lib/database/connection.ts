import mongoose, { ConnectOptions } from "mongoose"
require('dotenv').config()


const Connections = {
    autoIndex: false,
    connectTimeoutMS: 1000,
}

function mongoosedb (){

    mongoose.connect(process.env.MONGO_URI!, Connections as ConnectOptions)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
    });
}

export default mongoosedb
