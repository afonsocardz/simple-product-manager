import {Router} from 'express';
import categoryRouter from './categoryRouter';

const router = Router();

router.use('/categories', categoryRouter);

export default router;