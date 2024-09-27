import mongoose from 'mongoose'

let db_url =  process.env.MONGODB_URL || 'mongodb://dev:reblog@localhost/blog?authSource=admin'

let db

async function connect() {
    if(db) return db;
    if( process.env.NODE_ENV === 'production') {
        db = await mongoose.connect(db_url)
    }
    else {
        if(!global.__db) {
            global.__db = await mongoose.connect(db_url)
        }
        db = global.__db
    }
    return db
}

connect()

export { mongoose, connect }