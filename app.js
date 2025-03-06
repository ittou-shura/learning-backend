const express = require('express');
const app = express();
const userRouter = require('./routes/user.routes');
const indexRouter = require('./routes/index.routes');
const dotenv = require('dotenv');
dotenv.config();
const cookieParser = require('cookie-parser');

const connectToDB = require('./config/db');
connectToDB();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cookieParser()); 

app.use('/', indexRouter);
app.use('/user', userRouter);

app.listen(3000, ()=>{
    console.log('Server is Runnning!');
});