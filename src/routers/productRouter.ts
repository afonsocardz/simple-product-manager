import {Router} from 'express';
import { productController } from '../controllers/productController';

const router = Router();

router.post('/', productController.create);
router.put('/', productController.update);
router.delete('/', productController.remove);
router.get('/', productController.getAll);
router.get('/category/:id', productController.getProductsByCategoryId);

export default router;