import app from "./app"
import dotenv from "dotenv"
dotenv.config()

const PORT: number = Number(process.env.PORT) || 5002

app.listen(PORT, () => console.log(`Servidor rodando na porta:${PORT}`))