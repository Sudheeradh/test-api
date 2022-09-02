const express = require('express')
const app = express()

const PORT = 8000

const rappers = {
    "21 savage": {
        'age': 29,
        'birthName': "Abraham",
        'location': "London"
    },
    "chance the rapper": {
        "age": 29,
        'birthName': "Chancelor",
        'location': "Chicago"
    },
    "dylan": {
        "age": 29,
        'birthName': "Dylan",
        'location': "Dylan"
    }
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

// app.get('/js/main.js', (req, res) => {
//     res.sendFile(__dirname + req.originalUrl)
// })

app.get('/api/:rapperName', (req, res) => {
    const rappersName = req.params.rapperName.toLowerCase()
    if (rappers[rappersName]) {
        res.json(rappers[rappersName])
    } else {
        res.json(rappers["Dylan"])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on ${PORT} :P`)
})