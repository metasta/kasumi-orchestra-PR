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
 instruction.innerHTML = '<ol><li>このファイル（「パンフ表紙.html」）を編集する<li>『Google Chrome』でレイアウトをチェックする（水色の枠が仕上がりサイズ）<li>印刷プレビュー（⌘P）を開き、PDFに保存する</ol>';
 var firstsection = document.getElementsByTagName("section")[0];
 document.body.insertBefore(instruction,firstsection);
}

/* 印刷プレビューにのみ表示される説明を挿入 */
function instruction_print(){
 var instruction_print = document.createElement("div");
 instruction_print.className = "instruction_print";
 instruction_print.innerHTML = '<h1>パンフ表紙・裏表紙</h1><p>このプレビューは全5ページあり、<br>表紙が2枚目、裏表紙が4枚目にある<br><small>（1枚目はこの説明、3,5枚目は白紙）</small></p><p><strong>余白「なし」</strong>を確認した上で、<br>表紙と裏表紙だけを保存するため<br><strong>「2,4」とページ指定して保存</strong>する</p>';
 var firstsection = document.getElementsByTagName("section")[0];
 document.body.insertBefore(instruction_print,firstsection);
}


/*
 「B5+3mm」のサイズを示す黒枠線と
 「B5ちょうど」のサイズを示す水色のガイド線を各ページに表示する。
 */
function guide(){
	var sections = document.getElementsByTagName("section");
	for (var i = 0; i < sections.length; i++){
  var pdf = document.createElement("div");
  pdf.className = "pdf";
  sections[i].appendChild(pdf);

  var B5 = document.createElement("table");
  B5.className = "B5";
  /* 2 * 2 のガイド線を作成 */
  for (var j = 0; j < 2; j++){
  	var tr = B5.insertRow(-1);
  	for (var k = 0; k < 2; k++){
  		var td = tr.insertCell(-1);
  	}
  }
  sections[i].appendChild(B5);
	}
}

function f(){
 css()
 instruction()
 instruction_print()
 guide()
}