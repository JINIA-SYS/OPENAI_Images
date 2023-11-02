const express = require("express")
const fs = require("fs");
const path = require("path")

const dotenv = require("dotenv")
const cors = require("cors")
dotenv.config();
const app = express();


//Server Running
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server Running at Port:${PORT}`)
})

//MONGODB Database connection
const { MONGODB_connect } = require("./models/mongoose_connect.js")
MONGODB_connect(process.env.MONGODB_URL)


//Middleware Section

app.use(express.json({limit:'50mb'}))
app.use(express.urlencoded({ extended: true }))
const corsOptions = {
    origin: 'http://localhost:5173',
};
app.use(cors(corsOptions))


//GET RESPONSE
const Staticrouter = require("./routes/static_routes.js")
const POSTRouter = require("./routes/post_routes.js")

app.use("/api/v1/dalle", Staticrouter)
app.use("/api/v1/post", POSTRouter)






