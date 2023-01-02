const bcrypt = require("bcrypt");

const hashedPassword = bcrypt.hashSync('testInna', 7);

//console.log(hashedPassword)

const result = bcrypt.compareSync('testInna', hashedPassword)

//console.log(result)