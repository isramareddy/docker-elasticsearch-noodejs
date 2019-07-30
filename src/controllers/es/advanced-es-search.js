import Driver from '../../models/driver';

const usePagination = (req, res, next) => {

    const input = req.headers.input;
    const from = req.headers.from;
    const size = req.headers.size;

    Driver.esSearch({
            from: from,
            size: size,
            query: {
                query_string: {
                    query: input,
                }
            }
     }, function(err, results){

        if(err)
            return res.status(501).json(err);
        else
            return res.status(200).json(results);
     }
)
}


export {
    usePagination
};
