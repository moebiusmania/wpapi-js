'use strict';

const ghpages = require('gh-pages');
const path = require('path');
const msg = '* Deploy on gh-pages branch completed!';

ghpages.publish(path.join(__dirname, './../public'), (err) => {
  err ? console.log(err) : console.log(msg);
});
