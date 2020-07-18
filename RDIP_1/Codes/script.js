//----------CORPUS----------//

var corp1 = 'A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. "How shall I climb out?" said the mouse. "oh, how shall I climb out?" Just then a rat came along, and he heard the mouse. "Mouse," said the rat, "if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in."';
var corp2 = 'A wolf carried off a lamb. The lamb said, "I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself." The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.';
var corp3 = 'A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. "Why does he not make a pet of me?" said the donkey. "It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its ' + "master's" + ' knee. It is not fair." Then the donkey said to himself, "If I do what the dog does, he may make a pet of me." So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its ' + "master's" + ' knee. The master thought the donkey was mad, and he shouted, "Help! Help!" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. "I only did what the dog does," said the donkey," ' + 'and yet they make a pet of the dog, and they beat me with sticks. It is not fair.';
var data;
var userToken;
var userType;
var flag1=0;

function start(value){
  reset();
  document.getElementById("corpData").innerHTML = "";
  document.getElementById("disp1").style = "display: block";
  selected = document.getElementById("corpus").value;
  switch(selected){
    case "1":
      data = corp1;
      document.getElementById("corpData").innerHTML = data;
      document.getElementById("disp1").style = "display: block";
      break;
    case "2":
      data = corp2;
      document.getElementById("corpData").innerHTML = data;
      document.getElementById("disp1").style = "display: block";
      break;
    case "3":
      data = corp3;
      document.getElementById("corpData").innerHTML = data;
      document.getElementById("disp1").style = "display: block";
      break;
    default:
      alert("Select a corpus");
      document.getElementById("corpData").innerHTML = "";
      document.getElementById("disp1").style = "display: none";
      break;
  }
  data = data.replace(/[^a-zA-Z ]/g,"");
  data = data.toLowerCase();
}

function tokens(str) { 
  return str.split(" ").length;
}

function types(str) { 
  let set = new Set(str.split(' '));
  return set.size;
}


function check(){
  document.getElementById("cont").style = "display: none";
  userToken=document.getElementById("tokensInp").value;
  userType=document.getElementById("typesInp").value;
  var tokenVal = tokens(data);
  var typeVal = types(data);
  flag1=0;
  if (userToken == tokenVal)
  {
    document.getElementById("tokensInp").style = "background-color: green";
    flag1++;
  }
  else
  {
    document.getElementById("tokensInp").style = "background-color: red";
  }
  if (userType == typeVal){
    document.getElementById("typesInp").style = "background-color: green";
    flag1++;
  }
  else
  {   
    document.getElementById("typesInp").style = "background-color: red";
  }
  if(flag1 == 2)
  {
    document.getElementById("result").innerHTML = "Right Answer";
    document.getElementById("result").style = "color: green";
    document.getElementById("cont").style = "display: block";
  }
  else
  {
    document.getElementById("result").innerHTML = "Wrong Answer";
    document.getElementById("result").style = "color: red";
    document.getElementById("cont").style = "display: none";
  }
}

function reset(){
  document.getElementById("tokensInp").value="";
  document.getElementById("typesInp").value="";
  document.getElementById("tokensInp").style = "background-color: white";
  document.getElementById("typesInp").style = "background-color: white";
  document.getElementById("cont").style = "display: none";
  document.getElementById("result").innerHTML = "";
}