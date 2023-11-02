    const cors = require("cors")
    const dotenv = require("dotenv")
    const cloudinary  = require("cloudinary").v2
    const { Configuration, OpenAIApi } = require("openai")
    const image_model = require("../models/mongoose_schema.js")

    dotenv.config()

    const configuration = new Configuration({ apikey: process.env.OPENAI_APIKEY })
    const openai = new OpenAIApi(configuration);

    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    })


    

    //GET POST PAGE
    async function GET_POST_PAGE(req, res) {
        try {
            const posts = await image_model.find({})
            res.status(200).json({ success: true, data: posts })

        } catch (error) {
            res.status(500).json({ success: false, message: error })

        }
    }

    //POSTING POST PAGE
    async function POSTING_POST_PAGE(req, res) {
        try {
            const { name, prompt,photo } = req.body;
            
            const photourl = await cloudinary.uploader.upload(photo,{ upload_preset:'DALLE_APP'}) 
            console.log('Uploaded Photo URL:', photourl);
            try {
                const photourl = await cloudinary.uploader.upload(photo);
                console.log('Uploaded Photo URL:', photourl);
               
            } catch (error) {
                console.error('Error uploading photo:', error);
                
            }
            const newPost = await image_model.create({ name, prompt,photo:photourl.url })
            //console.log(photourl)
            console.log('New Post:', newPost);
            return res.status(201).json({ success: true, data: newPost });

        } catch (error) {
            console.error(error,'Error creating new post:');
            res.status(500).json({ success: false, message: error })

        }

    }

    module.exports = {
        GET_POST_PAGE, POSTING_POST_PAGE
    }

