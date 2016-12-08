'use strict'

const fs = require('fs');

fs.createReadStream('./node_modules/milligram/dist/milligram.min.css')
  .pipe(fs.createWriteStream('./public/milligram.min.css'));
