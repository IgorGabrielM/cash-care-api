import { Router } from "express";
import { CreateUserController } from "../modules/users/controllers/user.controller";

const createUserController = new CreateUserController();

const userRoutes = Router();

userRoutes.post('/', createUserController.create);

export { userRoutes };