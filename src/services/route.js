import { Router } from 'express';
import { simpleEsSearch } from '../controllers/es-search';

const router = Router();

// service api
router.route('/es/simple')
    .get(simpleEsSearch);

export default router;
