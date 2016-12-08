'use strict';

class WPORG {
  constructor(){
    this.url = 'https://demo.wp-api.org/wp-json/wp/v2';
  }

  getPosts(opts){
    const api = `${this.url}/posts/?_jsonp&per_page=${opts.number}&categories=${opts.cat}`;
    return fetch(api).then((response) => {
      return response.json();
    });
  }

  getCategories(opts){
    const api = `${this.url}/categories/?_jsonp`;
    return fetch(api).then((response) => {
      return response.json();
    });
  }
}

export default WPORG;
