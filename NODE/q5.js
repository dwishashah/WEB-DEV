const express = require('express')
const app = express()

app.listen(3000,() => {
    console.log("Listening on port 3000")
})

app.get('/', (req,res) => {
    res.sendFile(__dirname + "/q5.html");
});