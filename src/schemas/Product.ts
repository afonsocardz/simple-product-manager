import Joi from 'joi';

export const ProductSchema = Joi.object({
  name: Joi.string().required().label('Nome do produto inválido'),
  price: Joi.number().required().label('Preço informado é inválido'),
  imageUrl: Joi.string().uri().required().label('URL da imagem inválido'),
  categoryId: Joi.number().required().label('Categoria informada é inválida')
})