/* for debug*/
const log = function(str){console.log(str)}

$(function (){
  const selector = $(".title > p");
  addTitleText(selector, selector.text())
  .then(() => moveTitleText(selector))
  .then(() => log("end"));
});

/**
 * @brief タイトルテキストを1文字ずつ表示
 * @param selector:selector タイトルテキストのセレクタ
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

/**
 * @brief タイトルテキストを左上に移動
 * @param text:string 表示するタイトルテキスト
 * @param time:int 1文字増える時間[ms]
 * @param n:int 表示の最初の値
 * @return Promise(void) 返り値なし
 */
const moveTitleText = function(selector, time1=1500, time2=1000){
  setTimeout(function(){
    return selector.animate({
      "font-size": "100%",
      "width": "300px",
      "margin-left": "0px",
      "top": "10px"
    }, time1).promise();
  }, time2);
}
