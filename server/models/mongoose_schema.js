    const {Schema,model}=require("mongoose")
    const image_data_schema=new Schema({

        name:{type:String,required:true},
        prompt:{type:String, required:true},
        photo:{type:String,required:true}
    },{timestamps:true})

    const db_model=model("dalle",image_data_schema)
    module.exports=db_model