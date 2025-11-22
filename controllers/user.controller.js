import { users } from '../db.js';

export const getUsers = (req, res) => {
    res.status(200).json(users);
  };

  export const addUser = (req, res) => {
    users.push(req.body);
    res.status(201).json({ message: 'המשתמש נוסף בהצלחה', user: req.body });
  };

  export const updateUser = (req, res, next) => {
    const index = users.findIndex(b => b.id === +req.params.id);
  
    if (index === -1) {
      next({ status: 404, message: `user ${req.params.id} not found!` });
    }
  
    const user = { ...req.body };
    user.borrowedBooks = users[index].borrowedBooks;
  
    users[index] = user;
    res.status(200).json({ message: 'המשתמש עודכן בהצלחה', user: users[index] });
  };