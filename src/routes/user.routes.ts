import { Router } from "express";
import { CreateUserController } from "../modules/users/http/controllers/user.controller";

const createUserController = new CreateUserController();

const userRoutes = Router();

userRoutes.post('/', createUserController.handle);

export { userRoutes };