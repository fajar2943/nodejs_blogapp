const mongodb=require('mongodb'); 
const MongoClient=mongodb.MongoClient; 
let database; 
async function connect(){ 
  const client = await MongoClient.connect('mongodb://localhost:27017/blog');
  database = client.db('blog'); 
} 
 
function getDb(){ 
  if (!database){ 
    throw{message:'database cnonection not establish'} 
  } 
return database; 
} 
module.exports= { 
  connectToDb: connect, 
  getDb:getDb 
}