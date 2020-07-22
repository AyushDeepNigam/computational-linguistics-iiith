//----------CORPUS----------//

var engCorp = [
  "The child liked the chocolate.",
  "She was stopped by the bravest knight.",
  "Mary baked a cake for his birthday.",
  "She decorated the cake carefully.",
  "Mary wore a dress with polka dots."
];

var hinCorp = [
  "राम ने सीता के लिए फल तोड़ा।",
  "छोटे बच्चे पाठशाला जल्दी आयेंगे।",
  "मेहनत का फल मीठा होता है।",
  "वाह! वह खूबसूरत है।",
  "पेड़ से पत्ते गिर गए।"
];

//--------------------------//
var corp = [];
var senID = "";
var lang = 0;
var chosenLine = "";
var chosenArr = [];
var newelement;
var flag = "null";
var mySelect = "";
var ticks = [];
var inputOption = [];
var tru = "http://cl-iiith.vlabs.ac.in/exp7/right.png";
var fal = "http://cl-iiith.vlabs.ac.in/exp7/wrong.png";
//--------------------------//

function start_lang() {
  document.getElementById("buttonAnswer").value = "Get Answer";
  document.getElementById("buttonCreate").style = "display: none;";
  var langUsr = document.getElementById("lang").value;
  reset();
  switch (langUsr) {
    case "1":
      corp = engCorp;
      document.getElementById("engSen").style = "display: block";
      document.getElementById("hinSen").style = "display: none";
      document.getElementById("buttonCreate").style = "display: none;";
      flag = "eng";
      options = [
        "Noun",
        "Pronoun",
        "Conjunction",
        "Interjection",
        "Verb",
        "Determiner",
        "Adjective",
        "Adverb",
        "Preposition"
      ];
      senID = "engSen";
      break;
    case "2":
      corp = hinCorp;
      document.getElementById("hinSen").style = "display: block";
      document.getElementById("engSen").style = "display: none";
      document.getElementById("buttonCreate").style = "display: none;";
      flag = "hin";
      options = [
        "Noun",
        "Pronoun",
        "Conjunction",
        "Interjection",
        "Verb",
        "Adjective",
        "Adverb",
        "Postposition"
      ];
      senID = "hinSen";
      break;
    default:
      alert("Select Langugage");
      document.getElementById("engSen").style = "display: none";
      document.getElementById("hinSen").style = "display: none";
      document.getElementById("buttonCreate").style = "display: none;";
      document.getElementById("buttonAnswer").style = "display: none";
      senID = "";
      break;
  }
}

function reset() {
  document.getElementById("buttonAnswer").value = "Get Answer";
  document.getElementById("engSen").value = "null";
  document.getElementById("hinSen").value = "null";
  document.getElementById("engSen").style = "display: none";
  document.getElementById("hinSen").style = "display: none";
  document.getElementById("POSmsg").style = "display: none";
  document.getElementById("tableDiv").style = "display: none";
  document.getElementById("buttonCreate").style = "display: block;";
  document.getElementById("buttonAnswer").style = "display: none";
}

function sentence() {
  document.getElementById("buttonAnswer").value = "Get Answer";
  document.getElementById("buttonAnswer").style = "display: none";
  var ind = document.getElementById(senID).value;
  chosenLine = corp[ind];
  chosenLine = chosenLine.replace("।", "");
  chosenLine = chosenLine.replace(".", "");
  chosenArr = chosenLine.split(" ");
  document.getElementById("POSmsg").style = "display: block";
  document.getElementById("POSmsg").style = "color: blue";
  document.getElementById("tableDiv").innerHTML = "";
  createTable();
}

function createTable() {
  { 
    document.getElementById("buttonAnswer").value = "Get Answer";
    document.getElementById("tableDiv").style = "display: block";
    var tableDiv = document.getElementById("tableDiv");
    var table = document.createElement("table");
    var header = table.createTHead();
    var row = header.insertRow(0);
    var cell = row.insertCell(0);
    cell.innerHTML = "LEXICON";
    var posH = table.createTHead();
    var cell = row.insertCell();
    cell.innerHTML = "POS";
    for (i = 0; i < chosenArr.length; i++) {
      var tr = document.createElement("tr");
      var row1 = document.createElement("td");
      var lexicon = document.createTextNode(chosenArr[i]);
      row1.appendChild(lexicon);
      tr.appendChild(row1);
      table.appendChild(tr);
      var pos = document.createElement("td");
      var poSelect = document.createElement("div");
      var divID = "myDiv" + i;
      poSelect.setAttribute("id", divID);

      var cb = document.createElement("td");
      var cbImg = document.createElement("img");
      cbImg.setAttribute("id", "cb" + i);

      // var text2 = document.createTextNode("");

      var ans = document.createElement("td");
      var answers = document.createTextNode("");
      ans.setAttribute("id", "ans" + i);

      pos.appendChild(poSelect);
      cb.appendChild(cbImg);
      ans.appendChild(answers);
      tr.appendChild(pos);
      tr.appendChild(cb);
      tr.appendChild(ans);

      table.appendChild(tr);
    }
    tableDiv.appendChild(table);
  }
  createSelect();
}

function createSelect() {
  for (i = 0; i < chosenArr.length; i++) {
    divID = "myDiv" + i;
    var myDiv = document.getElementById(divID);

    var selectList = document.createElement("select");
    mySelect = "option" + i;
    selectList.setAttribute("id", mySelect);
    myDiv.appendChild(selectList);

    for (var j = 0; j < options.length; j++) {
      var option = document.createElement("option");
      option.setAttribute("value", options[j]);
      option.text = options[j];
      selectList.appendChild(option);
    }
  }
  document.getElementById("buttonCreate").style = "display: block;";
  document.getElementById("buttonAnswer").value = "Get Answer";
}

function checkAnswer() {
  document.getElementById("buttonAnswer").style = "display: none";
  inputOption = [];
  ticks = [];
  chosenLine = chosenLine.replace("राम","Noun").replace("सीता","Noun").replace("फल","Noun").replace("बच्चे","Noun").replace("पाठशाला","Noun").replace("मेहनत","Noun").replace("पेड़","Noun").replace("पत्ते","Noun").replace("ने","Postposition").replace("के","Postposition").replace("लिए","Postposition").replace("का","Postposition").replace("से","Postposition").replace("तोड़ा","Verb").replace("आयेंगे","Verb").replace("होता","Verb").replace("है","Verb").replace("गिर","Verb").replace("गए","Verb").replace("छोटे","Adjective").replace("मीठा","Adjective").replace("खूबसूरत","Adjective").replace("जल्दी","Adverb").replace("वाह!","Interjection").replace("वह","Pronoun").replace("She","Pronoun").replace("child","Noun").replace("chocolate","Noun").replace("knight","Noun").replace("Mary","Noun").replace("cake","Noun").replace("birthday","Noun").replace("polka","Noun").replace("dots","Noun").replace("by","Postposition").replace("for","Postposition").replace("with","Postposition").replace("liked","Verb").replace("his","Determiner").replace("The","Determiner").replace("the","Determiner").replace("was","Determiner").replace("stopped","Verb").replace("baked","Verb").replace("decorated","Verb").replace("wore","Verb").replace("bravest","Adjective").replace("carefully","Adverb").replace("dress","Noun");chosenArr = chosenLine.split(" ");for(i=0;i<chosenArr.length;i++){if(chosenArr[i]=="a"){chosenArr[i]="Determiner";}}
  // alert(chosenArr);
  for (i = 0; i < chosenArr.length; i++) {
    inputOption.push(document.getElementById("option" + i).value);
  }
  for (i = 0; i < chosenArr.length; i++) {
    if (inputOption[i] == chosenArr[i]) {
      ticks.push("t");
    } else {
      ticks.push("f");
    }
  }
  for (i = 0; i < chosenArr.length; i++) {
    if (ticks[i] == "t") {
      document.getElementById("cb" + i).src = tru;
      document.getElementById("cb" + i).style =
        "height: 25px; width: 25px; padding-left: 40px; padding-bottom: 10px; vertical-align: top;";
    } else {
      document.getElementById("buttonAnswer").style = "display: block";
      document.getElementById("cb" + i).src = fal;
      document.getElementById("cb" + i).style =
        "height: 25px; width: 25px; padding-left: 40px; padding-bottom: 10px; vertical-align: top;";
    }
  }
  for (i=0; i<ticks.length; i++){
    if(ticks[i] == "f"){
      document.getElementById("buttonAnswer").style = "display: block";
    }
  }
}

function GetAnswer(){
  var buttonflag = document.getElementById("buttonAnswer").value
  if (buttonflag == "Get Answer"){
    for(i=0;i<chosenArr.length;i++){
      document.getElementById("ans"+i).innerHTML = chosenArr[i];
    }
     document.getElementById("buttonAnswer").value = "Hide Answer";
  }
  else{
    for(i=0;i<chosenArr.length;i++){
    document.getElementById("ans"+i).innerHTML = "";
  }
   document.getElementById("buttonAnswer").value = "Get Answer";
  }
 
}

require.config({
  paths: {
    POSpeech: "../Libraries/node_modules/pos/POSTagger",
  }
});

require(["POSpeech"]);
