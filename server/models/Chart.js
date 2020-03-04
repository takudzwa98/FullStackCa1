const mongoose  = require('mongoose');
const validator = require('validator');

const SchemeConfig = {timestamps: true, skipVersioning: true};
const ChartSchema  = new mongoose.Schema({

    title: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    },
    artist: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    },
    chartno: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    }
    

  }, SchemeConfig);

  module.exports.Chart = mongoose.model('Chart', ChartSchema);