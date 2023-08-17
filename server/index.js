import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from '../server/routes/posts.js';

const app = express();


app.use('/posts', postRoutes);
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

//Connecting to mongodb database using mongoose

const CONNECTION_URL = 'mongodb+srv://raksag70:winery@messagerdb1.0vttnrb.mongodb.net/';

const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL)
.then(console.log(`server listening on port:  ${PORT}`))
.catch((error) =>  console.log(error.message));

