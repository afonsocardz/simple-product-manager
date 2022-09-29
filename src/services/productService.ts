import { productRepository } from "../repositories/productRepository";
import { TCreateProductData, TUpdateProduct } from "../types/productTypes";

async function create(product: TCreateProductData) {
  await isProductExists(product);
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

async function findOrFail(id:number) {
  const product = await productRepository.getById(id);
  if(!product){
    throw {type: 'not_found', message: 'Categoria não encontrada'};
  }
  return product;
}

async function isProductExists(productData: TCreateProductData) {
  const product = await productRepository.getByName(productData);
  if (product) {
    throw { type: 'conflict', message: 'Já existe essa categoria' }
  }
}

export const productService = {
  getAll,
  create,
  update,
  remove,
}