import { number } from "joi";
import { prisma } from "../config/database";
import { TCreateProductData, TUpdateProduct } from "../types/productTypes";

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
  create,
  update,
  remove
}