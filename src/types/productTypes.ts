import {Product} from '@prisma/client';

export type TCreateProductData = Omit<Product, 'id'>;