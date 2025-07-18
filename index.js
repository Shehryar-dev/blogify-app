import express from "express";
import path from 'path';
import { config } from "dotenv";
import connectToMongodb from "./config/config.js";
import {UserRouter} from "./routes/user_routes.js";
import { StaticRouter } from "./routes/static_routes.js";
import cookieParser from "cookie-parser"; 
import {checkForAurhenticationCookies} from './middlewares/auth_middleware.js'
import { BlogRouter } from "./routes/blog_routes.js";
config();

const app = express();
const PORT = 3002;

connectToMongodb(process.env.DB_STR).then(()=> console.log('Mongodb Connected'));


app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
app.use(express.static('public'));
gi


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
app.use(checkForAurhenticationCookies('token'))

app.use('/user', UserRouter);
app.use('/', StaticRouter);
app.use('/blog', BlogRouter);


app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server Started at PORT:${process.env.PORT|| PORT}`);
});

