const mongoose  = require('mongoose');
const validator = require('validator');

const SchemeConfig = {timestamps: true, skipVersioning: true};
const SongSchema  = new mongoose.Schema({

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
    releasedate: {
      type      : String,
      required  : true,
      validator : value => !validator.isEmpty(value)
    }
    

  }, SchemeConfig);

  module.exports.Song = mongoose.model('Song', SongSchema);