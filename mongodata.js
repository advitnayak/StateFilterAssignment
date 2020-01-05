const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient
const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "state-filter"

var data_mongodb = MongoClient.connect(connectionURL,{useNewUrlParser:true},async(error,client)=>{
    if(error){
        return console.log("Unable to connect database")
    }
    const db =await client.db(databaseName)
    console.log("Connected to Mongodb Database")
    await db.collection("City_List").find({},(error,data)=>{
        if(error){
            return console.log("Unable to find the document")
        }
        data.toArray((err,dbData)=>{
            return dbData
        })
    })
})
module.exports = data_mongodb