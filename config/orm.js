const { query } = require('./connection.js')
const connection = require('./connection.js')

// Helper function to convert object key/value pairs to SQL syntax
const objToSql = ob => {
  const arr = []

  // loop through the keys and push the key/value as a string int arr
  for (const key in ob) {
    let value = ob[key]
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === 'string' && value.indexOf(' ') >= 0) {
        value = `'${value}'`
      }
      arr.push(`${key}=${value}`)
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString()
}

const orm = {
  // Gets all burgers from database.
  selectAll (tableInput, cb) {
    const queryString = `SELECT * FROM ${tableInput};`
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err
      }
      cb(result)
    })
  },

  // Creates a burger in the database.

  insertOne (table, cols, vals, cb) {
    // INSERT INTO burgers (burger_name) VALUES ('some burger name');
    let queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (?)`

    console.log(queryString)

    connection.query(queryString, vals, (err, result) => {
      if (err) {
        throw err
      }
      cb(result)
    })
  },

  // Updates a burger in the database.
  updateOne (table, objColVals, condition, cb) {
    // update burgers set devoured = true where id = id
    let queryString = `UPDATE ${table}`

    queryString += ' SET '
    queryString += objToSql(objColVals)
    queryString += ' WHERE '
    queryString += condition

    console.log(queryString)
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err
      }

      cb(result)
    })
  }
}

module.exports = orm
