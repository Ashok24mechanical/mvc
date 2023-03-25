const express = require('express');
const routes = require('./router/routes')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes)

app.listen(8080,()=>{
    console.log('Server started on port 8080');
})