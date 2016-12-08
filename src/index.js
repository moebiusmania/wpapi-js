'use strict';

// Modules
import 'whatwg-fetch';
import WPORG from './wporgclass';
import {$, renderPosts, renderCats} from './utils.js';

// Global objects
const myWP = new WPORG();

// Load and render categories
myWP.getCategories().then((data) => {
  const cats = $('#select-cat');
  data.length ? cats.disabled = false : null;
  renderCats(data, $('#categories').innerHTML, cats);
});

// Load and render posts
$('#posts').addEventListener('click', (evt) => {
  $('#spinner').style.display = 'block';
  $('#posts-output').innerHTML = '';

  const opts = {
    number: parseInt($('input[type="number"]').value),
    cat: parseInt($('#select-cat').value)
  }

  myWP.getPosts(opts).then((data) => {
    console.log(data);
    $('#spinner').style.display = 'none';
    renderPosts(data, $('#post').innerHTML, $('#posts-output'));
  });
});
