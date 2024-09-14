const express = require("express")

const app = express()
const PORT = 3000

app.get('/',function(req,res){
    res.send("Hello from 3000")
});

app.listen(PORT,function(){
    console.log(`Server is running on ${PORT}`)
})