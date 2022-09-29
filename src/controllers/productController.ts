import { Request, Response } from "express";
import { productService } from "../services/productService";
import { TUpdateProduct } from "../types/productTypes";

async function create(req: Request, res: Response) {
  const product = req.body;
  await productService.create(product);
  res.sendStatus(201);
}

async function update(req: Request, res: Response) {
  const id = Number(req.body.id);
  const productData: TUpdateProduct = req.body;
  delete productData.id;
  await productService.update(productData, id);
  res.sendStatus(200);
}

async function remove(req:Request, res:  Response){
  const id = Number(req.body.id);
  await productService.remove(id);
  res.sendStatus(204);
}

async function getAll(req:Request, res: Response){
  const categories = await productService.getAll();
  res.status(200).send(categories);
}

export const productController = {
  getAll,
  remove,
  create,
  update,
}