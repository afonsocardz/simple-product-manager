import {Router} from 'express';
import categoryRouter from './categoryRouter';
import productRouter from './productRouter';

const router = Router();

router.use('/categories', categoryRouter);
router.use('/products', productRouter)

export default router;