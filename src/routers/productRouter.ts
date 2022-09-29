import {Router} from 'express';
import { productController } from '../controllers/productController';

const router = Router();

router.post('/', productController.create);
router.put('/', productController.update);
router.delete('/', productController.remove);
router.get('/', productController.getAll);

export default router;