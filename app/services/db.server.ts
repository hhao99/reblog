import  mongoose  from 'mongoose';

let db;
const db_url = 'mongodb://dev:reblog@localhost/blog?authSource=admin'
connect()

async function connect() {
    if( db ) return db

    if(process.env.NODE_ENV === 'production') {
        db = await mongoose.connect(db_url, {})

    } else {
        if(!global.__db) {
            global.__db = await mongoose.connect(db_url, {})
        }
        db = global.__db
    }

    return db;
}

export { mongoose, connect }
