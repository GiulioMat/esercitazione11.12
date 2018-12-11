const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('./public'))

app.get("/", function(req, res){
    res.send("Esercitazione 11.12.2018");
})

app.listen(PORT, () => console.log('Example app listening on port: ' + PORT));

