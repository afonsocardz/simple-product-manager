import { Request, Response } from "express";
import { categoryService } from "../services/categoryService";

async function create(req: Request, res: Response) {
  const category = req.body;
  await categoryService.create(category);
  res.sendStatus(201);
}

export const categoryController = {
  create
}