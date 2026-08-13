// C:\Users\Hope\Desktop\Project_package\mysite\public\spa-redirect.js
// Single Page Apps for GitHub Pages
// MIT License
// https://github.com/rafgraph/spa-github-pages
// This script checks for a redirect in the URL
(function(l) {
  if (l.search[1] === '/' ) {
    var decoded = l.search.slice(1).split('&').map(function(s) { 
      return s.replace(/~and~/g, '&')
    }).join('?');
    window.history.replaceState(null, null,
      l.pathname.slice(0, -1) + decoded + l.hash
    );
  }
}(window.location))