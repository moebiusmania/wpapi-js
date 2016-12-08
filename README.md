# WordPress REST API + JS

> Example of using WordPress 4.7+ REST API with (universal) Javascript

### How to install locally
* Clone this repo
* Run ```npm install``` to get dependencies
* Then ```npm start``` and open a browser to ```localhost:8080```

### Available tasks
```
npm start
```
copy required files and starts a static webserver on the *./public* folder.

```
npm run dev
```
as above plus starts Webpack in watch mode for Javascript files in the *./src* folder.

```
npm run deploy
```
one-shot compile of Webpack, copy CSS files in the *./public* folder and then commits and push it on the *gh-pages* branch.

### Why this example?
WordPress team has recently [released version 4.7](https://wordpress.org/news/2016/12/vaughan/) of their application, which officially introduce the REST APIs as a core functionality, moving the whole WordPress development experience torwards the [Project Calypso](https://ma.tt/2015/11/dance-to-calypso/) as happens now on wordpress.com websites.

This repo aims to give a real example on how to use WordPress REST API in Javascript especially for *old-school* theme developers.

### Universal Javascript?
Just a (new) naming convention, read more [on this post](https://medium.com/@mjackson/universal-javascript-4761051b7ae9#.yeha2l5d7).

### Which JS framework are you using?
None. Since this is a quick example I have wrote a couple of quick'n'dirty utilities to keep the main file code clean.

The focus in this example is on how to interact with data on a WordPress site in a RESTful way rather than showcase how to do it in framework X or Y.

### Demo
[https://moebiusmania.github.io/wpapi-js/](https://moebiusmania.github.io/wpapi-js/)

### License
Released under the [MIT license](LICENSE).
