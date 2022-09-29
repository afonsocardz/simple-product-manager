import { categoryRepository } from "../repositories/categoryRepository";
import { TCreateCategoryData } from "../types/categoryTypes";

async function create(category: TCreateCategoryData) {
  await isCategoryExists(category);
}

async function isCategoryExists(categoryData: TCreateCategoryData) {
  const category = await categoryRepository.getByName(categoryData);
  if(category){
    throw {type: 'conflict', message: 'Já existe essa categoria'}
  }
  await categoryRepository.create(categoryData);
}

export const categoryService = {
  create
}