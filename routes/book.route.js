import { Router } from "express";
import {getBooks, getBookByCode, updateBook, addLoan, deleteBook, addBook} from "../controllers/book.controller.js";
import { joiValidator } from "../middlewares/joi.validator.js";
import { validateBook } from "../models/book.model.js";

const router = Router();

router.get('/', getBooks);

router.get('/:code', getBookByCode);

router.put('/:code', updateBook);

router.patch('/:code/:id', addLoan);

router.delete('/:code', deleteBook);

router.post('/',joiValidator(validateBook.add), addBook);

export default router;