//----------CORPUS----------//

var engCorp = ["The child liked the chocolate.",
               "She was stopped by the bravest knight.",
               "Mary baked a cake for his birthday.",
               "She decorated the cake carefully.",
               "Mary wore a dress with polka dots."];

var hinCorp = ["राम ने सीता के लिए फल तोड़ा।",
               "छोटे बच्चे पाठशाला जल्दी आयेंगे।",
               "मेहनत का फल मीठा होता है।",
               "वाह! वह खूबसूरत है।",
               "पेड़ से पत्ते गिर गए।"];

//--------------------------//
var corp = [];
var senID = "";
var lang = 0;
var chosen = "";
//--------------------------//


function start_lang(){
  var langUsr = document.getElementById("lang").value;
  document.getElementById("engSen").value = "null";
  document.getElementById("hinSen").value = "null";
  document.getElementById("engSen").style = "display: none";
  document.getElementById("hinSen").style = "display: none";
  switch(langUsr){
    case "1":
      corp = engCorp;
      document.getElementById("engSen").style = "display: block";
      document.getElementById("hinSen").style = "display: none";
      senID = "engSen";
      break;
    case "2":
      corp = hinCorp;
      document.getElementById("hinSen").style = "display: block";
      document.getElementById("engSen").style = "display: none";
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

function sentence(){
  var ind = document.getElementById(senID).value;
  chosen = corp[ind];
  alert(chosen);
}