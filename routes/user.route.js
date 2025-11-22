import { Router } from "express";
import { getUsers, addUser, updateUser} from "../controllers/user.controller.js";
import { joiValidator } from "../middlewares/joi.validator.js";
import {validateUser} from "../models/user.model.js"
const router = Router();

router.get('/', getUsers);

router.post('/',joiValidator(validateUser.login), addUser);

router.put('/:code', updateUser);


export default router;