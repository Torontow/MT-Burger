const express = require('express')
const router = express.Router()

const burger = require('../models/burger.js')


router.put('/api/burgers/:id', (req, res) => {
  const condition = `id = ${req.params.id}`

  console.log('condition', condition)

  burger.updateOne(
    {
      devoured: req.body.devoured
    },
    condition,
    result => {
      if (result.changedRows === 0) {
        return res.status(404).end()
      }
      res.status(200).end()
    }
  )
})

// Router to VIEW all burgers.

router.get('/', (req, res) => {
  burger.selectAll(data => {
    const hbsObject = {
      burgers: data
    }
    console.log('hbsObject', hbsObject)
    res.render('index', hbsObject)
  })
})

// Post Router

router.post('/api/burgers', (req, res) => {
  burger.insertOne('burger_name', req.body.name, (result) => {
    res.json({ id: result.insertId })
  })
})

// Update Router


module.exports = router
