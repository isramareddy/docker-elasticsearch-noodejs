import { Router } from 'express';
import { simpleEsSearch, useHydrateEsSearch, useHydrateWithOptionsEsSearch } from '../controllers/es-search';

const router = Router();

// service api
router.route('/es/simple')
    .get(simpleEsSearch);

router.route('/es/use_hydrate')
    .get(useHydrateEsSearch);

router.route('/es/use_hydrate_options')
    .get(useHydrateWithOptionsEsSearch);

export default router;
