const mongoose = require('mongoose');

const poetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  birthDate :{
    type: String,
    required : true
  } ,
  deathDate:{
    type : String,
    required : true

  },
  nationality:{
    type : String,
    required : true

  }
});

const Poet = mongoose.model('Poet', poetSchema);