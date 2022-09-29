import {Category} from '@prisma/client';

export type TCreateCategoryData = Omit<Category, 'id'>;