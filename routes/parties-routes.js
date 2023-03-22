const express = require('express')
const router = express.Router()
const Party = require('../models/Party')


//!-- Get all parties ---
router.get('/', (req, res) => {
    Party.find({})
      .then((parties) => res.json(parties))
      .catch((err) => {
        console.log(err)
        res.status(500).json(err)
      })
  })

  router.delete('/', (req, res) => {
    Party.findByIdAndDelete(req.params.id)
      .then((parties) => {
        if(!parties) {
          return res.status(404).send()
        }
        res.send(party)
      }).catch((error) => {
        res.status(500).send(error)
      })
  })

// !--- Post each Party ----
router.post('/', async (req, res) => {

    const name = req.fields.name
    const phone = req.fields.phone
    const date = req.fields.date
    const time = req.fields.time
    const numOfGuests = req.fields.numOfGuests
    const comments = req.fields.comments

    const party = new Party({
      name: name,
      phone: phone,
      date: date,
      time: time,
      numOfGuests: numOfGuests,
      comments: comments
    })
    
     await party.save()
      .then(party => { 
          res.json(party)
          res.status(200)})
        .catch((err) => {
          console.log(err)
          res.status(201).end()
        })
})


module.exports = router