import Driver from '../../models/driver';

/**
 *
 * @param req
 * @param res
 * @param next
 * @returns {*|Promise<any>}
 *
 * simpleEsSearch
 * useHydrateEsSearch
 * useHydrateWithOptionsEsSearch
 * useHydrateWithOptionsWithESResults
 *
 */
const simpleEsSearch = (req, res, next) => {

    const input = req.query.input;
    try{
        Driver.search(
            {
                query_string: {
                    query: input
                }
            }, function(err, results) {
                /**
                 * To get data from result response
                 * we need to tap results.hits.hits.
                 *
                 * for this example we are not forced
                 * to get the useful data.
                 *
                 */

                if(err)
                    return res.status(501).json(err);
                else
                    return res.status(200).json(results);
            }
        );
    }catch (e) {
        return res.status(501).json(e);
    }
}

const useHydrateEsSearch = (req, res, next) => {

    const input = req.query.input;
    try{
       Driver.search(
           {
               query_string: {
                   query: input,
               }
           },
           {
               hydrate: true
           },
           (err, results) => {

               if(err)
                   return res.status(501).json(err);
               else
                   return res.status(200).json(results);
           }
       )
    }catch (e) {
        return res.status(501).json(e);
    }
}

const useHydrateWithOptionsEsSearch = (req, res, next) => {

    const input = req.query.input;
    try{
        Driver.search(
            {
                query_string: {
                    query: input,
                }
            },
            {
                hydrate: true,
                hydrateOptions: {select: 'full_name email phone'}
            },
            (err, results) => {

                if(err)
                    return res.status(501).json(err);
                else
                    return res.status(200).json(results);
            }
        )
    }catch (e) {
        return res.status(501).json(e);
    }
}

const useHydrateWithOptionsWithESResults = (req, res, next) => {

    const input = req.query.input;
    try{
        Driver.search(
            {
                query_string: {
                    query: input,
                }
            },
            {
                hydrate: true,
                hydrateWithESResults: true,
                hydrateOptions: {select: 'full_name'}
            },
            (err, results) => {

                if(err)
                    return res.status(501).json(err);
                else
                    return res.status(200).json(results);
            }
        )
    }catch (e) {
        return res.status(501).json(e);
    }
}







export {
    simpleEsSearch,
    useHydrateEsSearch,
    useHydrateWithOptionsEsSearch,
    useHydrateWithOptionsWithESResults
};
