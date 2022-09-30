import { productRepository } from "../repositories/productRepository";
import { TCreateProductData, TUpdateProduct } from "../types/productTypes";
import { categoryService } from "./categoryService";

async function create(product: TCreateProductData) {
  await isProductExists(product);
  await isCategoryExists(product.categoryId);
  await productRepository.create(product);
}

async function update(updateData: TUpdateProduct, id:number){
  await findOrFail(id);
  await productRepository.update(id, updateData);
}

async function remove(id:number){
  await findOrFail(id);
  await productRepository.remove(id);
}

async function getAll(){
  return await productRepository.getAll();
}

async function isCategoryExists(id:number){
  await categoryService.findOrFail(id);
}

async function findOrFail(id:number) {
  const product = await productRepository.getById(id);
  if(!product){
    throw {type: 'not_found', message: 'Produto não encontrado'};
  }
  return product;
}

async function isProductExists(productData: TCreateProductData) {
  const product = await productRepository.getByName(productData);
  if (product) {
    throw { type: 'conflict', message: 'Já existe esse produto' }
  }
}

export const productService = {
  getAll,
  create,
  update,
  remove,
}