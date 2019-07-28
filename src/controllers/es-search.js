import Driver from '../models/driver';

async function simpleEsSearch(req, res, next){

    const input = req.query.input;
    console.log(input)
    try{
        Driver.search(
            {
                query_string: {
                    query: input
                }
            }, function(err, results) {
                // results here

                if (results && results.hits && results.hits.hits){
                    var data = results.hits.hits.map((hit) => {
                        return hit;
                    });
                    return res.status(200).json(data);

                }
                else if (results && results.hits){
                    return res.status(200).json(results.hits);
                }
                else{
                    return res.status(200).json(results);
                }

            }
        );
    }catch (e) {
        return res.status(501).json(e);
    }




    /*
    */
}


export {
    simpleEsSearch
};
