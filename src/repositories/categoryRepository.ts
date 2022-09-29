import { Category } from "@prisma/client";
import { prisma } from "../config/database";
import { TCreateCategoryData, TUpdateCategory } from "../types/categoryTypes";

async function getAll (): Promise<Category[]>{
  return await prisma.category.findMany();
}

async function getById(id: number): Promise<Category> {
  return await prisma.category.findFirst({ where: { id } });
}

async function getByName({name}: TCreateCategoryData){
  return await prisma.category.findFirst({where: {name}});
}

async function create(category: TCreateCategoryData) {
  await prisma.category.create({
    data: category
  });
}

async function update(id: number, category: TUpdateCategory) {
  await prisma.category.update({
    where: { id },
    data: category
  })
};

async function remove(id: number) {
  await prisma.category.delete({
    where: { id }
  })
};

export const categoryRepository = {
  getAll,
  getById,
  getByName,
  create,
  update,
  remove
}