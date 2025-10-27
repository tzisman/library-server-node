import express from 'express';
import books from './db.js';

const app = express();

const port = 5000;
app.listen(port, () => {
    console.log(`you are on local host ${port}`);
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/books', (req, res) => {
    const { page = 1, limit = 5, price = 0 } = req.query;
  
    let filtered = books;
  
    
      filtered = filtered.filter(b =>
        b.price > price);
  
        const pageNum = Number(page);
        const limitNum = Number(limit);
        
        const startIndex = (pageNum - 1) * limitNum;
        const endIndex = pageNum * limitNum;
  
    const result = filtered.slice(startIndex, endIndex);

    res.send(result);
  });
  

app.get('/books/:code', (req, res) => {
    const book = books.find(x => x.code == +req.params.code);
    if(!book){
        return res.status(404).send({ error: 'לא נמצא ספר עם הקוד הזה' });
    }
    res.json(book);
});

app.put('/books/:code', (req, res) => {
    const index = books.findIndex(b => b.code === +req.params.code);

    if (index === -1) {
      return res.status(404).send({ error: 'לא נמצא ספר עם הקוד הזה' });
    }
    const book = {...req.body};
    book.borrows = books[index].borrows;

    books[index] = book;
    res.send({ message: 'הספר עודכן בהצלחה', book: books[index] });
});

app.patch('/books/:code/:id', (req, res) => {
    const book = books.find(x => x.code == +req.params.code);
    if(!book){
        return res.status(404).send({ error: 'לא נמצא ספר עם הקוד הזה' });
    }

    book.borrows.push({date: new Date() , customerCode: req.params.id});

    res.send({ message: 'the borrow was added', book: book });

});

app.delete('/books/:code', (req, res) => {
    books.splice(books.findIndex(x => x.code == req.params.code), 1);
    res.send({ message: 'the book removed' });

});
app.post('/books', (req, res) => {
    books.push(req.body);
    res.send(req.body);
});



