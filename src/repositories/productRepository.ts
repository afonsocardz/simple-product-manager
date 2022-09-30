import { Product } from "@prisma/client";
import { prisma } from "../config/database";
import { TCreateProductData, TUpdateProduct } from "../types/productTypes";

async function getAll (): Promise<Product[]>{
  return await prisma.product.findMany();
}

async function getById(id: number): Promise<Product> {
  return await prisma.product.findFirst({ where: { id } });
}

async function getByName({name}: TCreateProductData){
  return await prisma.product.findFirst({where: {name}});
}

async function getProductsByCategoryId(id:number){
  return await prisma.product.findMany({
    where: {
      categoryId: id,
    },
    include: {
      categories: true
    }
  })
}

async function create(product: TCreateProductData) {
  await prisma.product.create({
    data: product
  });
}

async function update(id: number, product: TUpdateProduct) {
  await prisma.product.update({
    where: { id },
    data: product
  })
};

async function remove(id: number){
  await prisma.product.delete({
    where: {id}
  })
};

export const productRepository = {
  getProductsByCategoryId,
  getAll,
  getByName,
  getById,
  create,
  update,
  remove
}