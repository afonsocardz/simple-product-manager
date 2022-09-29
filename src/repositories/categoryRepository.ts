import { prisma } from "../config/database";
import { TCreateCategoryData } from "../types/categoryTypes";

async function create(category: TCreateCategoryData){
  await prisma.category.create({
    data: category
  });
}

export const categoryRepository = {
  create
}