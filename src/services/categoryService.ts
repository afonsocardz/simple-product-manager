import { categoryRepository } from "../repositories/categoryRepository";
import { TCreateCategoryData, TUpdateCategory } from "../types/categoryTypes";

async function create(category: TCreateCategoryData) {
  await isCategoryExists(category);
  await categoryRepository.create(category);
}

async function update(updateData: TUpdateCategory, id:number){
  await findOrFail(id);
  await categoryRepository.update(id, updateData);
}

async function remove(id:number){
  await findOrFail(id);
  await categoryRepository.remove(id);
}

async function getAll(){
  return await categoryRepository.getAll();
}

async function findOrFail(id:number) {
  const category = await categoryRepository.getById(id);
  if(!category){
    throw {type: 'not_found', message: 'Categoria não encontrada'};
  }
  return category;
}

async function isCategoryExists(categoryData: TCreateCategoryData) {
  const category = await categoryRepository.getByName(categoryData);
  if (category) {
    throw { type: 'conflict', message: 'Já existe essa categoria' }
  }
}

export const categoryService = {
  findOrFail,
  getAll,
  create,
  update,
  remove,
}