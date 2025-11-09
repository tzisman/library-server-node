import { books } from '../db.js';


  // '/books' get
 export const getBooks = (req, res) => {
    const { page = 1, limit = 5, price = 0 } = req.query;
  
    let filtered = books.filter(b => b.price > +price);
  
    const pageNum = Number(page);
    const limitNum = Number(limit);
    const startIndex = (pageNum - 1) * limitNum;
    const endIndex = pageNum * limitNum;
  
    const result = filtered.slice(startIndex, endIndex);
  
    res.status(200).json(result);
  };
  
// /books/:code get
 export const getBookByCode = (req, res, next) => {
    const book = books.find(x => x.code == +req.params.code);
    if (!book) {
      next({ status: 404, message: `product ${req.params.code} not found!` });
    }
    res.status(200).json(book);
  };


  // /books/:code Put
 export const updateBook = (req, res, next) => {
    const index = books.findIndex(b => b.code === +req.params.code);
  
    if (index === -1) {
      next({ status: 404, message: `product ${req.params.code} not found!` });
    }
  
    const book = { ...req.body };
    book.borrows = books[index].borrows;
  
    books[index] = book;
    res.status(200).json({ message: 'הספר עודכן בהצלחה', book: books[index] });
  };
  
 //'/books/:code/:id' patch
 export const addLoan = (req, res, next) => {
    const book = books.find(x => x.code == +req.params.code);
    if (!book) {
      next({ status: 404, message: `product ${req.params.id} not found!` });
    }
  
    book.borrows.push({ date: new Date(), customerCode: req.params.id });
    res.status(200).json({ message: 'השאלה נוספה בהצלחה', book });
  };
  
  // '/books/:code' delete
 export const deleteBook = (req, res, next) => {
    const index = books.findIndex(x => x.code == req.params.code);
    if (index === -1) {
      next({ status: 404, message: `product ${req.params.code} not found!` });
    }
  
    books.splice(index, 1);
    res.status(200).json({ message: 'הספר נמחק בהצלחה' });
  };

// '/books' post
 export const addBook = (req, res) => {
    books.push(req.body);
    res.status(201).json({ message: 'הספר נוסף בהצלחה', book: req.body });
  };
  