const connectTomongo = require('./db')
const express = require('express');
var cors = require('cors')
const app = express();
const port = 5000;

app.use(cors())
connectTomongo();

app.use(express.json());
app.use('/api/auth',require('./routes/auth'))
app.use('/api/blogs',require('./routes/blog'))
app.get('/', (req,res)=>{
    res.send("hello world")
})    

app.listen(port ,()=>{
    console.log(`app listening at http://localhost:${port}`)
})    