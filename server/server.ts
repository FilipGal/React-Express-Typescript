import express from 'express'

const app: express.Application = express()

app.get('/api', (req, res) => {
  const obj = [{ 1: '1' }, { 2: '2' }, { 3: '3' }]
  res.json(obj)
})

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`Server started on ${port}`)
})
