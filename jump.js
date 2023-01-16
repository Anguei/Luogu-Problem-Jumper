// ==UserScript==
// @name         Luogu Problem Jumper
// @version      2.0
// @description  双击题号，自动跳转
// @author       Anguei, ouuan, abc1763613206, WorldHim
// @match        https://www.luogu.com.cn/*
// @match        https://*.blog.luogu.com.cn/*
// @grant        none
// @namespace    Anguei
// ==/UserScript==

function isProblemId(text) {
  if (text.match(/AT[0-9]{1,4}/) == text) return true;
  if (text.match(/CF[0-9]{1,4}[A-Z][0-9]{0,1}/) == text) return true;
  if (text.match(/SP[0-9]{1,5}/) == text) return true;
  if (text.match(/B[0-9]{4}/) == text) return true;
  if (text.match(/P[0-9]{4}/) == text) return true;
  if (text.match(/UVA[0-9]{1,5}/) == text) return true;
  if (text.match(/U[0-9]{1,6}/) == text) return true;
  if (text.match(/T[0-9]{1,6}/) == text) return true;
  return false;
}

function jump() {
  var selection = window.getSelection();
  var selected = selection.toString().replace(' ', '').toUpperCase();
  var url;

  if (event.ctrlKey) {
    var myBlog = document.querySelectorAll('.ops>a[href*=blog]')[0];
    url = myBlog.href + 'solution-';
  } else {
    url = 'https://www.luogu.com.cn/problem/';
  }

  if (isProblemId(selected)) {
    window.open(url + selected);
  }
}

function jumpMobile() {
  var selection = window.getSelection();
  var selected = selection.toString().replace(' ', '').toUpperCase();
  var url = window.location.href;

  if (isProblemId(selected)) {
    var parent = selection.anchorNode.parentNode;
    if (parent.className == 'am-comment-bd' &&
      parent.parentNode.innerHTML.match(/href="\/user\/3") != undefined) {
      window.open('https://' + url.match(/uid=([0-9]+)/)[1] + '.blog.luogu.com.cn/solution-' + selected);
    } else {
      window.open('https://www.luogu.com.cn/problem/' + selected);
    }
  }
}

function checkMobile() {
  var ua = navigator.userAgent;
  return window.screen.width / window.screen.height < 0.6 ||
      ua.indexOf('Android') > -1;
}

if (checkMobile()) {
  document.addEventListener('selectionchange', jumpMobile);
} else {
  document.ondblclick = jump;
}
