const { insertOne } = require('../config/orm.js')
const orm = require('../config/orm.js')

const burger = {
  // call the orm functions that will use user burger input

  // VIEW all burgers from database.

  selectAll (cb) {
    orm.selectAll('burgers', res => cb(res))
  },

  // CREATE new burger orm function.
  insertOne(cols, vals, cb) {
      orm.insertOne('burgers', cols, vals, (res) => cb(res));
  },
  // UPDATE burger status orm function.

  updateOne(objColVals, condition, cb) {
    orm.updateOne('burgers', objColVals, condition, (res) => cb(res));
  }
}

module.exports = burger
