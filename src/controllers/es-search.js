import Driver from '../models/driver';

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




export {
    simpleEsSearch,
    useHydrateEsSearch,
    useHydrateWithOptionsEsSearch
};
