import {Product} from '@prisma/client';

export type TCreateProductData = Omit<Product, 'id'>;

export type TUpdateProduct = Partial<Product>;