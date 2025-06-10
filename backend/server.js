require('dotenv').config()
const express = require('express')
const cors = require('cors')
const assetsRouter = require('./routes/assets')

const app = express()
app.use(cors())

app.use('/api/assets', assetsRouter);

const PORT = 3001
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`)
})
