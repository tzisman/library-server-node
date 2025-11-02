import { Router } from "express";
import {getBooks, getBookByCode, updateBook, addLoan, deleteBook, addBook} from "../controllers/book.controller.js";

const router = Router();

router.get('/', getBooks);

router.get('/:code', getBookByCode);

router.put('/:code', updateBook);

router.patch('/:code/:id', addLoan);

router.delete('/:code', deleteBook);

router.post('/', addBook);

export default router;