// ==UserScript==
// @name         Luogu Problem Jumper
// @version      1.2.3
// @description  双击题号，自动跳转
// @author       Anguei, ouuan
// @match        https://www.luogu.org/*
// @match        https://*.blog.luogu.org/*
// @grant        none
// @namespace    Anguei
// ==/UserScript==

function jump() {
  var selection = window.getSelection();
  var selected = selection.toString();
  selected = selected.replace(' ', '').toUpperCase();

  if (isProblemId(selected)) {
    window.open('https://www.luogu.org/problem/' + selected);
    selection.removeAllRanges();
  }

  function isProblemId(text) {
    if (text.match(/AT[0-9]{1,4}/) == text) return true;
    if (text.match(/CF[0-9]{1,4}[A-Z][0-9]{0,1}/) == text) return true;
    if (text.match(/SP[0-9]{1,5}/) == text) return true;
    if (text.match(/P[0-9]{4}/) == text) return true;
    if (text.match(/UVA[0-9]{1,5}/) == text) return true;
    if (text.match(/U[0-9]{1,6}/) == text) return true;
    if (text.match(/T[0-9]{1,6}/) == text) return true;
    return false;
  }
}

if (window.screen.width / window.screen.height < 0.6) {
  document.onselectionchange = jump;
} else {
  document.ondblclick = jump;
}