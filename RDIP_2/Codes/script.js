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
//--------------------------//

function start_lang() {
  var langUsr = document.getElementById("lang").value;
  reset();
  switch (langUsr) {
    case "1":
      corp = engCorp;
      document.getElementById("engSen").style = "display: block";
      document.getElementById("hinSen").style = "display: none";
      options = [
        "Noun",
        "Pronoun ",
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
      options = [
        "Noun",
        "Pronoun ",
        "Conjunction",
        "Interjection",
        "Verb",
        "Determiner",
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
      senID = "";
      break;
  }
}

function reset() {
  document.getElementById("engSen").value = "null";
  document.getElementById("hinSen").value = "null";
  document.getElementById("engSen").style = "display: none";
  document.getElementById("hinSen").style = "display: none";
  document.getElementById("POSmsg").style = "display: none";
  document.getElementById("tableDiv").style = "display: none";
}

function sentence() {
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

      var td2 = document.createElement("td");
      var td3 = document.createElement("td");

      var text2 = document.createTextNode("");
      var text3 = document.createTextNode("");

      pos.appendChild(poSelect);
      td2.appendChild(text2);
      td3.appendChild(text3);
      tr.appendChild(pos);
      tr.appendChild(td2);
      tr.appendChild(td3);

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
    selectList.setAttribute("id", "mySelect");
    myDiv.appendChild(selectList);

    for (var j = 0; j < options.length; j++) {
      var option = document.createElement("option");
      option.setAttribute("value", options[j]);
      option.text = options[j];
      selectList.appendChild(option);
    }
  }
}
