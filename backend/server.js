import express from 'express'
import dotenv from 'dotenv'
import urlRoute from './src/routes/urlRoute.js'


const PORT = process.env.PORT || 6969;
const app = express()

app.use(express.json());

app.get('/', (req, res) => {
    res.json("Backend Funcionando.")
})

app.use('/', urlRoute)

app.listen(PORT, () => {
    console.log(`Servidor [ENCURTADOR URL] está ligado na porta ${PORT}`)
})