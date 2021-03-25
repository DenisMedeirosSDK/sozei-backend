import 'reflect-metadata'
import express from 'express'

import './database'

const app = express()

app.use(express.json())

app.listen(3000, () => {
  console.log('Server start on port, 3000')
})