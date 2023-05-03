
import express from 'express'
import cors from 'cors';
import router from './router/index'

const app = express();


// const port: number = 5001;
// const url  = 'http://localhost:5001'
app.use(cors());

app.use(express.json());
app.use('/api', router)
app.use('/', (req, res) => {
  res.send('hello G');
});

app.get('/api/test',  (req,res) => {
  console.log('ici dans APP')
  res.send('ici dans lapp')
})

export default app
