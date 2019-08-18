// ==UserScript==
// @name         Luogu Problem Jumper
// @version      1.0
// @description  双击题号，自动跳转
// @author       Anguei
// @match        https://www.luogu.org/*
// @match        https://*.blog.luogu.org/*
// @grant        none
// ==/UserScript==

function jump() {
  var selection = window.getSelection();
  var selected = selection.toString();
  selected = selected.replace(' ', '');
  // console.log(selected);
  if (isProblemId(selected)) {
      window.open('https://www.luogu.org/problem/' + selected);
      selection.removeAllRanges();
  }

  function isProblemId(text) {
      if (text.length > 8) return false;
      if (text.match(/AT[0-9]+/) == text) return true;
      if (text.match(/CF[0-9]+[A-Z][0-9]*/) == text) return true;
      if (text.match(/SP[0-9]+/) == text) return true;
      if (text.match(/P[0-9]+/) == text) return true;
      if (text.match(/UVA[0-9]+/) == text) return true;
      return false;
  }
}

var code = jump.toString().split('\n').slice(1, -1).join('\n');

setInterval(code, 200);
