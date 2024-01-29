import * as express from 'express'

const app = express.default()
app.get('/', (req: express.Request, res: express.Response) => {
  res.send('hello World')
})

app.listen((process.env.PORT || 3000), () => console.log('Server is running'))
