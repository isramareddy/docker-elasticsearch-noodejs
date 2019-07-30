import { Router } from 'express';
import {
         simpleEsSearch,
         useHydrateEsSearch,
         useHydrateWithOptionsEsSearch,
         useHydrateWithOptionsWithESResults
       } from '../controllers/es/es-search';

import {
         usePagination
       } from '../controllers/es/advanced-es-search';

const router = Router();

// service api
router.route('/es/simple')
    .get(simpleEsSearch);

router.route('/es/use_hydrate')
    .get(useHydrateEsSearch);

router.route('/es/use_hydrate_options')
    .get(useHydrateWithOptionsEsSearch);

router.route('/es/use_hydrate_with_es_results')
    .get(useHydrateWithOptionsWithESResults);

router.route('/es/use_pagination')
    .get(usePagination);



export default router;
