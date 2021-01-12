const orm = require('../config/orm.js');

const burger = {

// call the orm functions that will use user burger input

// VIEW all burgers from database.

    selectAll(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },

// CREATE new burger orm function.

// UPDATE burger status orm function.

};


module.exports = burger;