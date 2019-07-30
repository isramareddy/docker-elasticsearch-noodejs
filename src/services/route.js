import { Router } from 'express';
import { simpleEsSearch, useHydratEsSearch } from '../controllers/es-search';

const router = Router();

// service api
router.route('/es/simple')
    .get(simpleEsSearch);

router.route('/es/use_hydrate')
    .get(useHydratEsSearch);

export default router;
