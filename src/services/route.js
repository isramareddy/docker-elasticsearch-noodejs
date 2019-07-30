import { Router } from 'express';
import {
         simpleEsSearch,
         useHydrateEsSearch,
         useHydrateWithOptionsEsSearch,
         useHydrateWithOptionsWithESResults
       } from '../controllers/es-search';

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


export default router;
