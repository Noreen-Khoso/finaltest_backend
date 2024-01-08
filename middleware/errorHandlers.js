// const constant = require("../constant/constants")

// const errorHandlers = (err,req,res,next) =>{

//     const statusCode =res.statusCode ? res.statusCode : 500;
//     res.json({message : err.message, stackTrace: err.stack});
//     switch (statusCode) {
//         case constant.VALIDATION_ERROR:
//             res.json({
//                 title : "Validation failed",
//                 message : err.message, 
//                 stackTrace: err.stack

//             });
//             break;
//             case constant.NOT_FOUND:
//             res.json({
//                 title : "Not Found",
//                 message : err.message, 
//                 stackTrace: err.stack

//             });
//             case constant.VALIDATION_ERROR:
//             res.json({
//                 title : "Validation failed",
//                 message : err.message, 
//                 stackTrace: err.stack

//             });
//             break;
//             case constant.UNAUTHERIZED:
//             res.json({
//                 title : "unautherized error",
//                 message : err.message, 
//                 stackTrace: err.stack

//             });
//             break;
//             case constant.FORBIDDEN_ERROR:
//             res.json({
//                 title : "forbidden error",
//                 message : err.message, 
//                 stackTrace: err.stack

//             });
//             break;
//             case constant.SERVER_ERROR:
//             res.json({
//                 title : "server error",
//                 message : err.message, 
//                 stackTrace: err.stack

//             });
//             default:
//                 console.log("no error all good !");
//                 break
            

//     }
// };


// module.exports = errorHandlers;

const errorHandler = (err, req, res, next) => {
    // Your error handling logic goes here
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  };
  
  module.exports = errorHandler;