const express = require('express');
const { somar, subtrair, multiplicar, dividir } = require('./util/calculadora.js');
const app = express();
const PORT = 8080;

app.get('/somar/:a/:b', function(req, res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.send(`A + B = ${somar(a, b)}`);
});

app.get('/subtrair/:a/:b', function(req, res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.send(`A - B = ${subtrair(a, b)}`);
});

app.get('/multiplicar/:a/:b', function(req, res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.send(`A * B = ${multiplicar(a, b)}`);
});

app.get('/dividir/:a/:b', function(req, res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    try {
        res.send(` A / B = ${dividir(a, b)}`);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

app.listen(PORT, function() {
    console.log(`Rodando na porta: ${PORT}`);
});