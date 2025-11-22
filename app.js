import express from 'express';
import bookRouter from './routes/book.route.js';
import userRouter from './routes/user.route.js';
import  {addRequestDate,  printDate }  from './middlewares/simple.middlewares.js';
import { errorHandler } from './middlewares/errores.middleware.js';
import cors from "cors";
import morgan from "morgan";

const app = express();


app.use(cors());

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}


const port = 5000;
app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/books', bookRouter);
app.use('/users', addRequestDate, printDate, userRouter);

app.use(errorHandler);




