import {Router} from 'express';
import { categoryController } from '../controllers/categoryController';

const router = Router();

router.post('/', categoryController.create);
router.put('/', categoryController.update);

export default router;