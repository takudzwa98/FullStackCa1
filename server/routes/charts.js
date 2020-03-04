const express  = require('express');
const router   = express.Router();
const mongoose = require('mongoose'); // using to generate ObjectIDs
const Chart   = require('../models/Chart').Chart;

/**
 * Functionality for this route:
 *  C   POST    /Charts/        Create a new Chart
 *  R   GET     /Charts         Gets an array of all Charts
 *  R   GET     /Charts/:id     Get a single Chart, by ID
 *  U   PUT     /Charts/:id     Update a single Chart, by id
 *  D   DELETE  /Charts/:id     Delete a single Chart, by ID
 */

// GET an array of all Charts change
router.get('/', (req, res) => {
    return mongoose
      .model('Chart')
      .find({})
      .then (charts => res.json(charts))
      .catch(err => res
        .status(500)
        .json({ok: false})
      );
  });

  // GET a single chart by ID
router.get('/:id([0-9a-fA-F]{24})', (req, res) => {
  return mongoose
    .model('Chart')
    .findOne({_id: req.params.id})
    .then (chart => res.json(chart))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

// POST Create a new chart
router.post('/', (req, res) => {
  return new Chart({
    title      : req.body.title,
    artist     : req.body.artist,
    chartno: req.body.chartno,
  })
  .save()
  .then (chart => Chart.populate(chart, {path: '_id'}))
  .then (chart => res.json(chart))
  .catch(err => res
    .status(400)
    .json({ok: false, error: err.message})
  );
});

// DELETE Delete a topic with a given ID
router.delete('/:id([0-9a-fA-F]{24})', (req, res) => {
  return Chart
    .deleteOne({_id: req.params.id})
    .then (() => res.json({'ok': true}))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

// PUT Update a chart
router.put('/:id([0-9a-fA-F]{24})', (req, res) => {
  return Chart
    .findOneAndUpdate(
      {_id: req.params.id},
      {$set: {
        title  : req.body.title,
        artist : req.body.artist,
        chartno: req.body.chartno,
      }},
      {new: true}
    )
    .then (chart => Chart.populate(chart, {path: '_id'}))
    .then (chart => res.json(chart))
    .catch(err => res
      .status(500)
      .json({ok: false})
    );
});

  module.exports = router;