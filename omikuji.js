//HTMLLMTHのボタンと結果表示の場所を取得する
const button = document.getElementById("draw-button");
const result = document.getElementById("result");

//おみくじの結果を配列にいれる
const fortunes = [
  "超大吉！　是非宝くじを買ってね！",
  "大吉！　ガチャを回してみよう！",
  "中吉！　新しいことに挑戦してみよう！",
  "小吉！　小さな幸せを見つけてみよう！",
  "凶... そんな日もあるよ...気にせず前をむこうぜ...！"
];

//ボタンが押された時の処理
button.addEventListener("click",function(){
  const randomNumber = Math.floor(Math.random() * fortunes.length);
  result.textContent = fortunes[randomNumber];
});