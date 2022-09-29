import { number } from "joi";
import { prisma } from "../config/database";
import { TCreateCategoryData, TUpdateCategory } from "../types/categoryTypes";

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

async function remove(id: number){
  await prisma.category.delete({
    where: {id}
  })
};

export const categoryRepository = {
  create,
  update,
  remove
}