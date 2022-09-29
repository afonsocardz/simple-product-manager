import {Category} from '@prisma/client';

export type TCreateCategoryData = Omit<Category, 'id'>;

export type TUpdateCategory = Partial<Category>;