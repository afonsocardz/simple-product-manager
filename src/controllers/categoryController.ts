import { Request, Response } from "express";
import { categoryService } from "../services/categoryService";

async function create(req: Request, res: Response) {
  const category = req.body;
  await categoryService.create(category);
  res.sendStatus(201);
}

async function update(req:Request, res: Response){
  const {id, name} = req.body;
  await categoryService.update(id,name);
  res.sendStatus(200);
}

export const categoryController = {
  create,
  update,
}