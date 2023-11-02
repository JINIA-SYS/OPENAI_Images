
const dotenv = require("dotenv")
const { v2: cloudinary } = require("cloudinary")
const { Configuration, OpenAIApi } = require("openai")
const image_model = require("../models/mongoose_schema.js")
dotenv.config()
const configuration = new Configuration({ apiKey: process.env.APIKEY })
const openai = new OpenAIApi(configuration)
console.log(process.env.OPENAI_APIKEY)

async function STATIC_Post_Page(req, res) {
    return res.status(200).json({ apiKey: process.env.APIKEY })
}

async function POST_Image(req, res) {
    try {
        const { prompt } = req.body;
        console.log(req.body)

        const aiResponse = await openai.createImage({
            prompt, n: 1, size: '1024x1024', response_format: 'b64_json',
        })
        const image = aiResponse.data.data[0].b64_json
        //console.log(aiResponse)
        res.status(200).json({ photo: image })
    } catch (error) {
        res.status(500).send(error?.response.data.error.message)
    }

}

module.exports = { POST_Image, STATIC_Post_Page }

