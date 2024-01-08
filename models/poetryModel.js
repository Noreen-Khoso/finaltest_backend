const  mongoose = require("mongoose");
const poetrySchema = mongoose.Schema({
    name : {
        type : String,
        required : [true, "Please enter poet name"]
    },
    theme : {
        type : String,
        required : [true, "Please enter poet theme name"]
    },
    poetry : {
        type : String,
        required : [true, "Please enter poetry"]
    },
   
},
);
module.exports = mongoose.model("Poetry" , poetrySchema);