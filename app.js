const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const fun = require('./fun')


app.use(express.static('./public'))

app.get("/", function(req, res){
    res.send("Esercitazione 11.12.2018");
})

app.get("/square", function(req, res){
    var result = fun(req.query.string);
    res.status(200).send({result: result})
})

/*app.get("/square", function(req, res){
    var stringa = req.query.string;
    if(isNaN(stringa)){
        var lunghezza = stringa.length;
        var quadrato = (lunghezza*lunghezza);
        res.json(quadrato);
    }
    res.json(-1);
})*/

app.listen(PORT, () => console.log('Example app listening on port: ' + PORT))

