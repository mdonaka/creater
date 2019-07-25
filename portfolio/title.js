/* for debug*/
const log = function(str){console.log(str)}

$(function (){
  setTitleText(1);
});

const text = "hello!";
const setTitleText = function(n){
  $(".title > p").text(text.slice(0,n));
  if(n < text.length){
    //setTimeout(setTitleText(n+1), 1000);
  }
};
