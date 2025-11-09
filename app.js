import express from 'express';
import bookRouter from './routes/book.route.js';
import userRouter from './routes/user.route.js';
import  {addRequestDate,  printDate }  from './middlewares/simple.middlewares.js';
import { errorHandler } from './middlewares/errores.middleware.js';

const app = express();

const port = 5000;
app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/books', bookRouter);
app.use('/users', addRequestDate, printDate, userRouter);

app.use(errorHandler);




