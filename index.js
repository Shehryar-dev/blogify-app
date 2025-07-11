import express from "express";
import path from 'path';
// const UserRouter = require('./routes/user_routes')
import connectToMongodb from "./config/config.js";
import {UserRouter} from "./routes/user_routes.js";
import { StaticRouter } from "./routes/static_routes.js";




const app = express();
const PORT = 3002;

connectToMongodb('mongodb://localhost:27017/blogging-app').then(()=> console.log('Mongodb Connected'));


app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
app.use(express.static('public'));



app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/user', UserRouter);
app.use('/', StaticRouter);





app.listen(PORT, ()=>{
    console.log(`Server Started at PORT:${PORT}`);
});

