const asyncHandler = (requestHandler) =>{
    (req, res, next)=>{
        Promise.resolve(requestHandler(res, req, next)).catch((err) => next(err))
    }
}





export {asyncHandler};


// Higher order function accept function as a parameter and return function
/* 
const asyncHandler = (fn) = async(req, res, next) =>{   
    try {  
    } catch (error) {
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
    }
}
*/
