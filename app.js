require("dotenv").config()
require("./src/db/dbConnection")
const cors = require("cors")
const router = require("./src/routers/")
const express = require("express")
const app = express()

const port = process.env.PORT || 5001

app.use(cors({
    origin: "*",
    methods: ["GET", "POST"]
}))
app.use(express.json())
app.use("/api", router)

app.get("/",(req,res)=>{
    res.status(200).send("Server başarılı bir şekilde çalışıyor.")
    console.log("İstek kabul edildi.")
})

app.listen(port, () => {
    console.log(`Server ${port} portunda çalışıyor`)
})