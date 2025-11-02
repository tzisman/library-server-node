import { users } from '../db.js';

export const getUsers = (req, res) => {
    res.status(200).json(users);
  };

  export const addUser = (req, res) => {
    users.push(req.body);
    res.status(201).json({ message: 'המשתמש נוסף בהצלחה', user: req.body });
  };