const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');

const filePath = path.join(__dirname, '../.env',);
const file = fs.readFileSync(filePath);

module.exports = dotenv.parse(file);