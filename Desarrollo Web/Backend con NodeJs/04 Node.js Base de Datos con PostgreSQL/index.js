import express from 'express';
import cors from 'cors';

const app = express()
const port = process.env.PORT || 3003

app.use(express.json())

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Listen on ${port}!`))