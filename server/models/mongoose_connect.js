const mongoose=require("mongoose")

async function MONGODB_connect(url)
{
    return mongoose.set({strictQuery:true})
        .connect(url)
        .then(()=>{console.log(`MONGODB connected at ${url}`)})
        .catch((err)=>{console.log("MONGODB connection failure, please check the server")})
}

module.exports={MONGODB_connect}