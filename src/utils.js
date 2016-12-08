'use strict';

// querySelector shorthand
export const $ = function(selector){
  return document.querySelector(selector);
}

export const renderPosts = (data,template,output) => {
  data.forEach((e,i) => {
    const element = template
                      .replace('{{title}}', e.title.rendered)
                      .replace('{{id}}', e.id)
                      .replace('{{content}}', e.excerpt.rendered);
    output.innerHTML += element;
  });
}

export const renderCats = (data,template,output) => {
  data.forEach((e,i) => {
    const element = template
                      .replace('{{id}}', e.id)
                      .replace('{{slug}}', e.slug)
                      .replace('{{name}}', e.name);
    output.innerHTML += element;
  });
}
