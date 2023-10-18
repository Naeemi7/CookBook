import { body } from "express-validator";

export const validateComments = [body("comment").trim().escape().notEmpty()];
