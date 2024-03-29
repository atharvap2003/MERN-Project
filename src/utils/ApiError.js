class ApiError extends Error{
    constructor(
        statusCode,
        message="Something went wrong",
        error = [],
        statck = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.errors = error

         if(stack){
            this.stack = statck
         } else{
            Error.captureStackTrace(this, this.constructor);
         }
    }
}