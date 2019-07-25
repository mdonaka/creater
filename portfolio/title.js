/* for debug*/
const log = function(str){console.log(str)}

$(function (){
  const selector = $(".title > p");
  addTitleText(selector, selector.text())
  .then(() => moveTitleText());
});

/**
 * @brief タイトルテキストを1文字ずつ表示
 * @param text:string 表示するタイトルテキスト
 * @param time:int 1文字増える時間[ms]
 * @param n:int 表示の最初の値
 * @return Promise(void) 返り値なし
 */
const addTitleText = function(selector, text, time=100, n=1){
  return new Promise(function(resolve){
    setTimeout(function(){
      if(n < text.length){
        // テキスト更新
        selector.text(text.slice(0,n)+"|");
        // 次の文字の更新処理
        addTitleText(selector, text, time, n+1)
        .then(() => resolve());
      } else {
        // テキスト操作の終了
        selector.text(text);
        resolve();
      }
    }, time);
  });
}

const moveTitleText = function(){
  log("ok");
}
