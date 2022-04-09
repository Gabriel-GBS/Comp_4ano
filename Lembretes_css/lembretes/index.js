const express = require('express')
const app = express()

const lembretes = {}
contador = 0

//GET
//exemplo.com.br/lembretes
app.get('/lembretes', (req, res) => {
    res.send(lembretes)
})
 
//POST
//exemplo.com.br/lembretes
app.post('/lembretes', (req, res) => {
    contador++
    //{texto: "Fazer café"}
    const { texto } = req.body
    lembretes[contador] = {contador, texto}
    res.status(201).send(lembrete[contador])
})

app.listen(4000, () => {
    console.log("Lembretes. Porta 4000.")
})
