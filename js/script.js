// LongWord
function LongWord(str) {
  var words = str.split(" ");
  var longest = "";
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}
console.log(LongWord("I am a web developer and I love to code in JavaScript"));

// const date = new Date();
// const year = date.getFullYear();
// const month = date.getMonth() + 1;
// const day = date.getDate();
// const hour = date.getHours();
// const minute = date.getMinutes();
// const second = date.getSeconds();
// const millisecond = date.getMilliseconds();
// const time = date.getTime();
// console.log(
//     `Year: ${year}, Month: ${month}, Day: ${day}, Hour: ${hour}, Minute: ${minute}, Second: ${second}, Millisecond: ${millisecond}, Time: ${time}`
// );
