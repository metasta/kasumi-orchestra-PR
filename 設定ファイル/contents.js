/*
 スタイルシート・説明文・枠線の読み込み。
 通常このファイルを編集する必要はない。
*/
function css(){
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
}


/* 説明を挿入 */
function instruction(){
 var instruction = document.createElement("div");
 instruction.className = "instruction";
 instruction.innerHTML = '<ol><li>このファイル（「パンフ中身.html」）を編集する<li>『Google Chrome』でレイアウトをチェックする<li>印刷設定画面（<kbd>⌘command + p</kbd>）を開き、PDFに保存する</ol>';
 var firstsection = document.getElementsByTagName("section")[0];
 document.body.insertBefore(instruction,firstsection);
}

/* 印刷プレビューにのみ表示される説明を挿入 */
function instruction_print(){
 var sections = document.getElementsByTagName("section");
 var firstsection = sections[0];
 var lastsection = sections[sections.length - 1];

 var instruction_print = document.createElement("div");
 instruction_print.className = "instruction_print";
 instruction_print.innerHTML = '<h1>パンフレット</h1><ol><li><strong>余白を上下32mm, 左右0mmに設定</strong>する<li>このプレビュー画面で再度レイアウトを確認する<li>印刷総数が<strong>4の倍数</strong>ページになるよう調整する<br><small>（広告の挿入位置などを調整。できる範囲で）</small><li><strong>最初と最後のページを除外指定</strong>して保存する<br><small>（例えば全20ページなら「2-19」と範囲指定する）</small></ol>';
 document.body.insertBefore(instruction_print,firstsection);

 /* 最後のページにも挿入 */
 var instruction_print2 = document.createElement("div");
 instruction_print2.className = "instruction_print";
 instruction_print2.innerHTML = '<p>裏表紙</p>';
 document.body.insertBefore(instruction_print2,lastsection.nextSibling);
}

/* aside 要素内 の改行を消去 */
function strip_br(){
	var aside = document.getElementsByTagName("aside");
 for (var i = 0; i < aside.length; i++){
  var nobr = aside[i].innerHTML.replace(/\r?\n/g,"");
  aside[i].innerHTML = nobr;
 }
}

/*
 「B5+3mm」の幅を示す黒枠線と
  「B5ちょうど」の幅を示す水色のガイド線を表示する。
 */
function guide(){
	var sections = document.getElementsByTagName("section");
	for (var i = 0; i < sections.length; i++){
		var newsection = document.createElement("section");

  var pdf = document.createElement("div");
  pdf.className = "pdf";

  var B5 = document.createElement("div");
  B5.className = "B5";

  newsection.appendChild(pdf);
  pdf.appendChild(B5);
  B5.innerHTML = sections[i].innerHTML;

  document.body.replaceChild(newsection, sections[i]);
 }
}
function f(){
 css()
 instruction()
 instruction_print()
 strip_br()
 guide()
}