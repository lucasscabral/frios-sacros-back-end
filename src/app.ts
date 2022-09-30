import "express-async-errors"
import express, { json } from "express"
import cors from "cors"
import dotenv from "dotenv"
import router from "../src/routers/index"
import errorsHendler from "../src/middlewers/errorsHendler"

dotenv.config()

const app = express()

app.use(json())
app.use(cors())
app.use(router)
app.use(errorsHendler)

const PORT: number = Number(process.env.PORT) || 5002

app.listen(PORT, () => console.log(`Servidor rodando na porta:${PORT}`))