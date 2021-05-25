import express, { Express } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import todoRouters from './routes/index';

const app: Express = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(cors());
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json());//support get data from request
app.use(todoRouters);


const db = require('./configs/db').mongoURI;
mongoose.set("useFindAndModify", false);
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(db, options).then(() => {
    console.log(`Database connected successfully ${db}`)
}).catch(err => {
    console.log(`Unable to connect with the database ${err}`)
});


app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
})