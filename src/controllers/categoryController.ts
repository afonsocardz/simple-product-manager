import { Request, Response } from "express";
import { categoryService } from "../services/categoryService";
import { TUpdateCategory } from "../types/categoryTypes";

async function create(req: Request, res: Response) {
  const category = req.body;
  await categoryService.create(category);
  res.sendStatus(201);
}

async function update(req: Request, res: Response) {
  const id = Number(req.body.id);
  const categoryData: TUpdateCategory = req.body;
  delete categoryData.id;
  await categoryService.update(categoryData, id);
  res.sendStatus(200);
}

async function remove(req:Request, res:  Response){
  const id = Number(req.body.id);
  await categoryService.remove(id);
  res.sendStatus(204);
}

async function getAll(req:Request, res: Response){
  const categories = await categoryService.getAll();
  res.status(200).send(categories);
}

export const categoryController = {
  getAll,
  remove,
  create,
  update,
}