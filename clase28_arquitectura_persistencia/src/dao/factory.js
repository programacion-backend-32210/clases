import config from "../config/config.js";
import mongoose from "mongoose";

export let Contacts

switch (config.persistence) {
    case 'MONGO':
        console.log('Mongo connecte');    

        const connection = mongoose.connect('mongodb://127.0.0.1:27017', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: "MyDB_28"
        })
        const { default: ContactsMongo } = await import('./mongo/contacts.mongo.js')
        Contacts = ContactsMongo

        break;
    case 'MEMORY':
        console.log('Persistence with Memory')    
        const { default: ContactsMemory } = await import('./memory/contacts.memory.js')
        Contacts = ContactsMemory

        break;
    default:
        break;
}