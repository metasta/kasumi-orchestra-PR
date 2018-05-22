/*
 html が煩雑にならないよう、演奏会情報以外の構造は
 極力この javascript で生成し、html には記述しない。
 通常このファイルを編集する必要はない。
*/

/*
 テーマ機能
*/
function set_theme() {
 document.documentElement.className = theme;
}

/*
 cssの読み込み
*/
function head() {
 var head = document.head;
 var script = head.getElementsByTagName("script")[0];

 var link1 = document.createElement("link");
 link1.setAttribute("rel", "stylesheet");
 link1.setAttribute("href", "設定ファイル/print.css");
 head.insertBefore(link1, script);

 var link2 = document.createElement("link");
 link2.setAttribute("rel", "stylesheet");
 link2.setAttribute("href", "設定ファイル/レイアウト.css");
 head.insertBefore(link2, script);

 var link3 = document.createElement("link");
 link3.setAttribute("rel", "stylesheet");
 link3.setAttribute("href", "設定ファイル/テーマ.css");
 head.insertBefore(link3, script);
}

/*
 a3用紙、a4描画領域、トンボ、ガイドの設定
*/
function paper() {
 var newbody = document.createElement("body");
 var a3paper = document.createElement("section");
 a3paper.className = "a3paper";
 var a4area = document.createElement("article");
 a4area.className = "a4area";

 a4area.innerHTML = document.body.innerHTML;
 a3paper.appendChild(a4area);

 var tombo = document.createElement("table");
 tombo.className = "tombo";
 for(var i = 0; i < 10; i++){
  var tr = tombo.insertRow(-1);
  for(var j = 0; j < 10; j++){
   var td = tr.insertCell(-1);
  }
 }
 a3paper.appendChild(tombo);

 var guide = document.createElement("div");
 guide.className = "guide";
 a3paper.appendChild(guide);

 var instruction = document.createElement("div");
 instruction.innerHTML = "<ol><li>このファイル（「チラシ.html」）を編集する<li>『Safari』でレイアウトをチェックする<li>印刷プレビュー（⌘P）を開く<li>A3サイズのPDFとして保存する<br>（A3は台紙のサイズ。チラシの仕上がりサイズはA4になる）</ol>";
 instruction.className = "instruction";

 newbody.appendChild(instruction);
 newbody.appendChild(a3paper);

 var html = document.body.parentNode;
 html.replaceChild(newbody, document.body);
}

/* 指揮者写真の img タグを div.img に変換 */
function portrait() {
 var portrait = document.getElementsByClassName("portrait");
 for (var i = 0; i < portrait.length; i++) {
  var img = portrait[i].getElementsByTagName("img");
  var caption = portrait[i].getElementsByTagName("figcaption")[0];
  for (var j = 0; j < img.length; j++) {
   var divimg = document.createElement("div");
   divimg.className = "img";
   divimg.style.backgroundImage = "url(" + img[j].getAttribute("src") + ")";
   portrait[i].replaceChild(divimg, img[j]);
  }
 }
}

function qrcode(){
 var website = document.createElement("script");
 website.src = "設定ファイル/qrcode_website.js";
 document.head.appendChild(website);

 var twitter = document.createElement("script");
 twitter.src = "設定ファイル/qrcode_twitter.js";
 document.head.appendChild(twitter);

 window.onload = function(){
  qrcode_website();
  qrcode_twitter();
 }
}

function f() {
 set_theme()
 head()
 paper()
 portrait()
 qrcode()
}