const mongoose = require('mongoose');

const connectDB = async ()=>{
    try{
        await mongoose.connect(
  "mongodb://viky:viky@ac-pkpfemz-shard-00-00.hxhzkss.mongodb.net:27017,ac-pkpfemz-shard-00-01.hxhzkss.mongodb.net:27017,ac-pkpfemz-shard-00-02.hxhzkss.mongodb.net:27017/?ssl=true&replicaSet=atlas-t20m0q-shard-0&authSource=admin&appName=KPRCASB1"
);
        console.log("MongoDB Connected Successfully🎉")
    }
    catch(err){
        console.log(err)
    }
}

module.exports = connectDB;