const { query } = require('./connection.js')
const connection = require('./connection.js')

// Helper function for SQL syntax
const printQuestionMarks = num => {
  const arr = []

  for (let i = 0; i < num; i++) {
    arr.push('?')
  }

  return arr.toString()
}

// Helper function to convert object key/value pairs to SQL syntax
const objToSql = ob => {
  const arr = []

  // loop through the keys and push the key/value as a string int arr
  for (const key in ob) {
    let value = ob[key]
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === 'string' && value.indexOf(' ') >= 0) {
        value = `'${value}'`
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
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
    let queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (?)`;
    
    // let queryString = `INSERT INTO ${table}`

    // queryString += ' ('
    // queryString += cols.toString()
    // queryString += ') '
    // queryString += 'VALUES ('
    // queryString += printQuestionMarks(vals.length)
    // queryString += ') '

    console.log(queryString)

    connection.query(queryString, vals, (err, result) => {
      if (err) {
        throw err
      }
      cb(result)
    })
  }
}

// Updates a burger in the database.
// updateOne();

module.exports = orm
