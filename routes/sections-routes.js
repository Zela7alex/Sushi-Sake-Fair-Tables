const express = require('express')
const router = express.Router()
const Section = require('../models/Section')


//!-- Get all sections ---
router.get('/', (req, res) => {
    Section.find({})
      .then((sections) => res.json(sections))
      .catch((err) => {
        console.log(err)
        res.status(500).json(err)
      })
  })

// !--- Post each Section Day ----
router.post('/', async (req, res) => {

    const date = req.fields.date
    const day = req.fields.day
    const sectionA = req.fields.sectionA
    const sectionB = req.fields.sectionB
    const sectionC = req.fields.sectionC
    const sectionD = req.fields.sectionD
    const sectionE = req.fields.sectionE
    const sectionF = req.fields.sectionF
    
    
    const section = new Section({
      date: date,
      day: day,
      sectionA: sectionA,
      sectionB: sectionB,
      sectionC: sectionC,
      sectionD: sectionD,
      sectionE: sectionE,
      sectionF: sectionF
    })
    
     await section.save()
      .then(section => { 
          res.json(section)
          res.status(200)})
        .catch((err) => {
          console.log(err)
          res.status(201).end()
        })
})


module.exports = router