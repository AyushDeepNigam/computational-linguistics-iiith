//---------ENGLISH SENTENCES----------//
var e1 = [
  "John ate an apple before afternoon",
  "before afternoon John ate an apple",
  "John before afternoon ate an apple"
];

var e2 = [
  "some students like to study in the night",
  "at night some students like to study"
];

var e3 = ["John and Mary went to church", "Mary and John went to church"];

var e4 = [
  "John went to church after eating",
  "after eating John went to church",
  "John after eating went to church"
];

var e5 = ["did he go to market", "he did go to market"];

var e6 = [
  "the woman who called my sister sells cosmetics",
  "the woman who sells cosmetics called my sister",
  "my sister who sells cosmetics called the woman",
  "my sister who called the woman sells cosmetics"
];

var e7 = [
  "John goes to the library and studies",
  "John studies and goes to the library"
];

var e8 = ["John ate an apple so did she", "she ate an apple so did John"];

var e9 = [
  "the teacher returned the book after she noticed the error",
  "the teacher noticed the error after she returned the book",
  "after the teacher returned the book she noticed the error",
  "after the teacher noticed the error she returned the book",
  "she returned the book after the teacher noticed the error",
  "she noticed the error after the teacher returned the book",
  "after she returned the book the teacher noticed the error",
  "after she noticed the error the teacher returned the book"
];

var e10 = [
  "I told her that I bought a book yesterday",
  "I told her yesterday that I bought a book",
  "yesterday I told her that I bought a book",
  "I bought a book that I told her yesterday",
  "I bought a book yesterday that I told her",
  "yesterday I bought a book that I told her"
];

//----------HINDI SENTENCES----------//

var h1 = [
  "राम और श्याम बाजार गयें",
  "राम और श्याम गयें बाजार",
  "बाजार गयें राम और श्याम",
  "गयें बाजार राम और श्याम"
];

var h2 = [
  "राम सोया और श्याम भी",
  "श्याम सोया और राम भी",
  "सोया श्याम और राम भी",
  "सोया राम और श्याम भी"
];

var h3 = [
  "मैंने उसे बताया कि राम सो रहा है",
  "मैंने उसे बताया कि सो रहा है राम",
  "उसे मैंने बताया कि राम सो रहा है",
  "उसे मैंने बताया कि सो रहा है राम",
  "मैंने बताया उसे कि राम सो रहा है",
  "मैंने बताया उसे कि सो रहा है राम",
  "उसे बताया मैंने कि राम सो रहा है",
  "उसे बताया मैंने कि सो रहा है राम",
  "बताया मैंने उसे कि राम सो रहा है",
  "बताया मैंने उसे कि सो रहा है राम",
  "बताया उसे मैंने कि राम सो रहा है",
  "बताया उसे मैंने कि सो रहा है राम"
];

var h4 = [
  "राम खाकर सोया",
  "खाकर राम सोया",
  "राम सोया खाकर",
  "खाकर सोया राम",
  "सोया राम खाकर",
  "सोया खाकर राम"
];

var h5 = [
  "बिल्लियों को मारकर कुत्ता सो गया",
  "मारकर बिल्लियों को कुत्ता सो गया",
  "बिल्लियों को मारकर सो गया कुत्ता",
  "मारकर बिल्लियों को सो गया कुत्ता",
  "कुत्ता सो गया बिल्लियों को मारकर",
  "कुत्ता सो गया मारकर बिल्लियों को",
  "सो गया कुत्ता बिल्लियों को मारकर",
  "सो गया कुत्ता मारकर बिल्लियों को"
];

var h6 = [
  "एक लाल किताब वहाँ है",
  "एक लाल किताब है वहाँ",
  "वहाँ है एक लाल किताब",
  "है वहाँ एक लाल किताब"
];

var h7 = [
  "एक बड़ी सी किताब वहाँ है",
  "एक बड़ी सी किताब है वहाँ",
  "बड़ी सी एक किताब वहाँ है",
  "बड़ी सी एक किताब है वहाँ",
  "वहाँ है एक बड़ी सी किताब",
  "वहाँ है बड़ी सी एक किताब",
  "है वहाँ एक बड़ी सी किताब",
  "है वहाँ बड़ी सी एक किताब"
];

var randSen = [];
var check = [];
var sentences = [];
var createdSen = [];
var senLen = 0;
function start(value) {
  createdSen = [];
  senLen=0;
  document.getElementById("dispM").style = "display: none";
  document.getElementById("reform").style = "display: none";
  document.getElementById("dispMsg").style = "display: none";
  document.getElementById("createdSentence").style = "display: none";
  document.getElementById("showTrue").style = "display: none";
  document.getElementById("showFalse").style = "display: none";
  document.getElementById("getAns").style = "display: none";
  document.getElementById("check").style = "display: none";
  document.getElementById("getAns").innerHTML = "Get correct sentence";
  document.getElementById("wordButtons").innerHTML = " ";
  document.getElementById("createdSentence").innerHTML = " ";
  document.getElementById("answers").innerHTML = " ";
  switch (value) {
    case "eng":
      sentences = [e1, e2, e3, e4, e5, e6, e7, e8, e9, e10];
      document.getElementById("dispM").style = "display: block";
      break;
    case "hin":
      var sentences = [h1, h2, h3, h4, h5, h6, h7];
      document.getElementById("dispM").style = "display: block";
      break;
    case "null":
      alert("Select Language");
    default:
      break;
  }

  var randNum = Math.floor(Math.random() * sentences.length);
  chosen = sentences[randNum];
  var word = Math.floor(Math.random() * chosen.length);
  randSen = chosen[word].split(" ");

  var words = randSen.length,
    temp,
    randX;
  while (words > 0) {
    randX = Math.floor(Math.random() * words);
    words--;
    temp = randSen[words];
    randSen[words] = randSen[randX];
    randSen[randX] = temp;
  }
  wordButton();
  return randSen;
}

function wordButton() {
  for (var i = 0; i < randSen.length; i++) {
    var button = document.createElement("button");
    var x = document.createTextNode(randSen[i]);
    button.appendChild(x);
    document.getElementById("wordButtons").appendChild(button);
    button.value = randSen[i];
    button.setAttribute("id", i);
    button.setAttribute("class", "wordButtons");
    button.setAttribute("onclick", "createSen(this.id)");
    document.getElementById("wordButtons").innerHTML;
  }
}

function createSen(id) {
  document.getElementById("createdSentence").style = "display: block";
  document.getElementById("dispMsg").style = "display: block";
  document.getElementById("reform").style = "display: block";
  document.getElementById(id).style = "display: none";
  word = document.getElementById(id).value;
  document.getElementById("createdSentence").innerHTML += word + "&emsp14;";
  createdSen.push(word);
  senLen++;
  if (randSen.length == senLen) {
    document.getElementById("check").style = "display:block";
  }
}

function reform() {
  document.getElementById("wordButtons").innerHTML = "";
  document.getElementById("createdSentence").innerHTML = "";
  document.getElementById("dispMsg").style = "display: none";
  document.getElementById("reform").style = "display: none";
  document.getElementById("showTrue").style = "display: none";
  document.getElementById("showFalse").style = "display: none";
  document.getElementById("check").style = "display: none";
  document.getElementById("getAns").style = "display: none";
  document.getElementById("getAns").innerHTML = "Get correct sentence";
  document.getElementById("answers").innerHTML = "";
  createdSen = [];
  wordButton();
  senLen = 0;
}

function checkSen() {
  var tf = chosen.includes(createdSen.join(" "));
  tf = Number(tf);
  if (tf == 1) {
    document.getElementById("showTrue").style = "display: block";
  } else if (tf == 0) {
    document.getElementById("showFalse").style = "display: block";
    document.getElementById("getAns").style = "display: block";
  }
}

function getCorrect() {
  document.getElementById("answers").innerHTML = chosen.join("<br>");
  btfunc();
}

function btfunc() {
  var btstat = document.getElementById("getAns").innerHTML;
  var gcs = "Get correct sentence";
  var hcs = "Hide the correct sentence";
  if (btstat == gcs) {
    document.getElementById("getAns").innerHTML = "Hide the correct sentence";
  } else if (btstat == hcs) {
    document.getElementById("getAns").innerHTML = "Get answers";
    document.getElementById("answers").innerHTML = "";
  } else {
    document.getElementById("getAns").innerHTML = "Hide the correct sentence";
    document.getElementById("answers").innerHTML = chosen.join("<br>");
  }
}
