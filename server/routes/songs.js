const express  = require('express');
const router   = express.Router();
const mongoose = require('mongoose'); // using to generate ObjectIDs
const Song   = require('../models/Song').Song;

/**
 * Functionality for this route:
 *  C   POST    /Songs/        Create a new Song
 *  R   GET     /Songs         Gets an array of all Songs
 *  R   GET     /Songs/:id     Get a single Song, by ID
 *  U   PUT     /Songs/:id     Update a single Song, by id
 *  D   DELETE  /Songs/:id     Delete a single Song, by ID
 */

// GET an array of all Songs change
router.get('/', (req, res) => {
    return mongoose
      .model('Song')
      .find({})
      .then (songs => res.json(songs))
      .catch(err => res
        .status(500)
        .json({ok: false})
      );
  });

  // GET a single song by ID
router.get('/:id([0-9a-fA-F]{24})', (req, res) => {
  return mongoose
    .model('Song')
    .findOne({_id: req.params.id})
    .then (song => res.json(song))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

// POST Create a new song
router.post('/', (req, res) => {
  return new Song({
    title      : req.body.title,
    artist     : req.body.artist,
    releasedate: req.body.releasedate,
  })
  .save()
  .then (song => Song.populate(song, {path: '_id'}))
  .then (song => res.json(song))
  .catch(err => res
    .status(400)
    .json({ok: false, error: err.message})
  );
});

// DELETE Delete a topic with a given ID
router.delete('/:id([0-9a-fA-F]{24})', (req, res) => {
  return Song
    .deleteOne({_id: req.params.id})
    .then (() => res.json({'ok': true}))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

// PUT Update a song
router.put('/:id([0-9a-fA-F]{24})', (req, res) => {
  return Song
    .findOneAndUpdate(
      {_id: req.params.id},
      {$set: {
        title  : req.body.title,
        artist : req.body.artist,
        releasedate: req.body.releasedate,
      }},
      {new: true}
    )
    .then (song => Song.populate(song, {path: '_id'}))
    .then (song => res.json(song))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

  module.exports = router;