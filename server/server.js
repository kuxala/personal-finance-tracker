const express = require("express")
const app = express()
const PORT = 3000
const cors = require("cors")

app.use(cors());

app.get('/api/home', (req, res) =>{
    res.json({message :"hello world"})
})

app.listen(PORT, () =>{
    console.log(`server is running on ${PORT}`)
})