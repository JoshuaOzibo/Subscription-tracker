const errorMiddleware = (err, req, res, next) => {
    try{

        let error = {...err};

        error.message = err.message;

        console.error(err);


        //Mongoose bad objectId
        //this happen when we have a cast error

        if(err.name === 'CastError'){
            const message = 'Resource not found';
            error = new Error(message);
            error.statusCode = 404;
        };


        //Mongoose dublicate key
        //this happen when we try to create something with thesame key
        //it happens when the error code is 11000

        if(err.code === 11000){
            const message = 'Dublicate field value entered';
            error = new Error(message);
            error.statusCode = 400;
        }

        //mongoose validation error
        // this happened when we are trying to create a document and we dont pass the right props

        if(error.name === 'ValidationError'){
            const message = Object.values(err.errors).map((val) => val.message);
            error = new Error(message.join(', '));
            error.statusCode = 400
        }


        res.status(error.statusCode || 500).json({success: false, error: error.message || 'server error'})

    } catch(error){
        next(error)
    }
}


export default errorMiddleware;