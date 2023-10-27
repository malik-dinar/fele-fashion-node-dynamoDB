const express = require('express');
const http = require('http');
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors');
const app = express();
const productRouter = require('./router/product.route.js');
const apiAuth = require('./middlewares/auth.middleware.js');
const port = process.env.PORT || 3001;


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(apiAuth)

const server = http.createServer(app);


app.use('/api/product', productRouter);

server.listen(port, () => {
    console.log(`server is  running in ${port}`);
});


