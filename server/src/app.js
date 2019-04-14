import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import { join } from 'path'
import cors from 'cors'

const app = express()

app.use(cors({
  credentials: true,
  origin: 'http://localhost:8080'
}))

app.set('views', join(__dirname, 'views'))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.set('trust proxy', 1) // trust first proxy

app.listen(process.env.PORT || 8081)
