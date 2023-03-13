//Author: Ananth Josyula
//Test Your Abilities

//Variable Initializations
var currentScreen = "";//keeps track of screen that calls LevelUp
var score1 = 0;//keeps track of the score in level 1 of game1
var min=30;//states min value for width or height in game1
var max=100;//states max value for width or height in game1
var score2=0;//keeps track of the score in level 2 of game1
var width=0;//set default width value for level 2 of game1
var height=0;//set default height value for level 2 of game1
var x=0;//# of clicks for the check buttons of level 1 of game2
var x1=0;//# of clicks for the check buttons of level 2 of game2
var click1 = false;//set first button of level 1 as not clicked
var click2 = false;//set second button of level 1 as not clicked
var click3 = false;//set third button of level 1 as not clicked
var click4 = false;//set fourth button of level 1 as not clicked
var click5 = false;//set first button of level 2 as not clicked
var click6 = false;//set second button of level 2 as not clicked
var click7 = false;//set third button of level 2 as not clicked
var click8 = false;//set fourth button of level 2 as not clicked
var score = 0;//initialize default score value for game3
var lives = 3;//initialize default lives value for game3
//Processing in Main Screen
setScreen("home");
onEvent("game1", "click", function() {
  setScreen("game1welcome");
});
onEvent("game2", "click", function() {
  setScreen("game2welcome");
});
onEvent("game3", "click", function() {
  setScreen("game3welcome");
});
//Processing in Level Up Screen. 
//Called in Games 1 and 2 to move from 1 level to next
onEvent("up", "click", function() {
  if (currentScreen==11) {
    setScreen("screen2");
    score2=0;
    setText("score2", "Score: "+score2);
    mainRandom();
  } else if ((currentScreen==21)) {
    setScreen("2screen2");
  }
});
//Processing in Game1 Screens
onEvent("playgame1", "click", function() {
  score1 = 0;
  setScreen("screen1");
  setText("score1", "Score: "+score1);
  randSetup();
});
//level1
//Function randSetup sets the colors of the 4 choice buttons to 
//random colors. It also sets a random index between 0 and 3 in 
//variable compRand to decide which of the 4 options will be the 
//right option. It then sets the color of the master button as the
//same color as the choice button associated with compRand. 
function randSetup(){
  var compRand = randomNumber(0, 3);
  var color = "";
  for (var i = 0; i < 4; i++) {
    var R = randomNumber(0,235);
    var G = randomNumber(0,235);
    var B = randomNumber(0,235);
    color = "rgb("+R+", "+G+", "+B+")";
    if (i==1) {
      setProperty("1buttonA", "background-color", color);
    } else if ((i==2)) {
      setProperty("1buttonB", "background-color", color);
    } else if ((i==3)) {
      setProperty("1buttonC", "background-color", color);
    } else {
      setProperty("1buttonD", "background-color", color);
    }
  }
  var tempCol = "";
  if (compRand==0) {
    tempCol = getProperty("1buttonA", "background-color");
    setProperty("comp", "background-color", tempCol);
  } else if (compRand==1) {
    tempCol = getProperty("1buttonB", "background-color");
    setProperty("comp", "background-color", tempCol);
  } else if (compRand==2) {
    tempCol = getProperty("1buttonC", "background-color");
    setProperty("comp", "background-color", tempCol);
  } else {
    tempCol = getProperty("1buttonD", "background-color");
    setProperty("comp", "background-color", tempCol);
  }
}
//Function checkCol takes the id of a choice button in x and 
//compares the color of x with the master color.If the colors 
//are the same, then there is a match. score1 is updated based
//on whether there is a match or not. It then calls function 
//score1Check to decide what to do next based on the score.
function checkCol(x) {
  var tempComp = getProperty("comp", "background-color");
  var tempAns = getProperty(x, "background-color");
  if (tempComp==tempAns) {
    score1++;
    setText("score1", "Score: "+score1);
  } else {
    score1--;
    setText("score1", "Score: "+score1);
  }
  score1Check();
}
//Function score1Check calls the different screens based on score
function score1Check() {
  if (score1==3) {
    score1=0;
    currentScreen=11;
    setScreen("levelUp");
  } else if ((score1==-1)) {
    setScreen("1youLose");
    onEvent("1another2", "click", function() {
      setScreen("home");
    });
    onEvent("1again2", "click", function() {
      setScreen("game1welcome");
    });
  }
  else randSetup ();
}
onEvent("1buttonA", "click", function() {
  checkCol("1buttonA");
});
onEvent("1buttonB", "click", function() {
  checkCol("1buttonB");
});
onEvent("1buttonC", "click", function() {
  checkCol("1buttonC");
});
onEvent("1buttonD", "click", function() {
  checkCol("1buttonD");
});
onEvent("1another1", "click", function() {
  setScreen("home");
});
onEvent("1again1", "click", function() {
  setScreen("game1welcome");
});
onEvent("1another2", "click", function() {
  setScreen("home");
});
onEvent("1again2", "click", function() {
  setScreen("game1welcome");
});
//level2
//Function mainRandom initializes random values for width and height,
//sets the width and height of master button to these random values.
//It also chooses a random index in widthArray and heightArray to 
//store the correct width and height and initializes the remaining
//values in widthArray and heightArray to random values.
function mainRandom() {
  width=randomNumber(min, max);
  height=randomNumber(min, max);
  var widthArray = [];
  var heightArray = [];
  var index=randomNumber(0,3);
  for (var i = 0; i < 4; i++) {
    if (i==index) {
      widthArray[i]=width;
      heightArray[i]=height;
    } else {
      widthArray[i]=randomNumber(min, max);
      heightArray[i]=randomNumber(min, max);
    }
  }
  setSize("2Comp", width, height);
  setSize("buttonA", widthArray[3], heightArray[3]);
  setSize("buttonB", widthArray[2], heightArray[2]);
  setSize("buttonC", widthArray[1], heightArray[1]);
  setSize("buttonD", widthArray[0], heightArray[0]); 
}
//Function updateScore checks if the width and height of the choice
//math those of the master button and updates score2 accordingly 
function updateScore(tempW,tempH) {
  if (tempW==width && tempH==height) {
    score2++;
    setText("score2", "Score: "+score2);
  } else {
    score2--;
    setText("score2", "Score: "+score2);
  }
  score2Check();
}
//Function score2Check calls different screens based on the current score
function score2Check() {
  if (score2==3) {
    score2=0;
    setScreen("1youWin");
  } else if ((score2==-1)) {
    setScreen("1youLose");
  } else {
    mainRandom ();
  }
}
onEvent("buttonA", "click", function() {
  var W=getProperty("buttonA", "width");
  var H=getProperty("buttonA", "height");
  updateScore(W,H);
});
onEvent("buttonB", "click", function() {
  var W=getProperty("buttonB", "width");
  var H=getProperty("buttonB", "height");
  updateScore(W,H);
});
onEvent("buttonC", "click", function() {
  var W=getProperty("buttonC", "width");
  var H=getProperty("buttonC", "height");
  updateScore(W,H);
});
onEvent("buttonD", "click", function() {
  var W=getProperty("buttonD", "width");
  var H=getProperty("buttonD", "height");
  updateScore(W,H);
});
//game2
function tryAgain() {//calls different screens based on what the user inputs
  setScreen("2youLose");
  onEvent("tryAgain", "click", function(){
  setScreen("2screen1");
  });
  onEvent("2newGame1", "click", function() {
    setScreen("home");
  });
}
onEvent("welcomeScreenbutton", "click", function(){
  setScreen("2screen1");
});
onEvent("1button1", "mouseover", function(){
  tryAgain();
});
onEvent("1button2", "mouseover", function(){
  tryAgain();
});
onEvent("1button3", "mouseover", function(){
  if(!click1){
    x++;
    click1 = true;  
  }
});
onEvent("1button4", "mouseover", function(){
  if(!click2){
    x++;
    click2 = true;  
  }
});
onEvent("1button5", "mouseover", function(){
  if(!click3){
    x++;
    click3 = true;  
  }
});
onEvent("1button6", "mouseover", function(){
  if(!click4){
    x++;
    click4 = true;  
  }
  if (x>=3){
    currentScreen = 21;
    setScreen("levelUp");
  }
});
onEvent("2button1", "mouseover", function(){
  tryAgain();
});
onEvent("2button2", "mouseover", function(){
  tryAgain();
});
onEvent("2button3", "mouseover", function(){
  if(!click5){
    x1++;
    click5 = true;
  }
});
onEvent("2button4", "mouseover", function(){
  if(!click6){
    x1++;
    click6 = true;
  }
});
onEvent("2button5", "mouseover", function(){
  if(!click7){
    x1++;
    click5 = true;
  }
});
onEvent("2button6", "mouseover", function(){
  if(!click8){
    x1++;
    click6 = true;
  }
});
onEvent("2button5", "mouseover", function(){
  if(!click7){
    x1++;
    click7 = true;
  }
});
onEvent("2button6", "mouseover", function(){
  if(!click8){
    x1++;
    click8 = true;
  }
  if (x1>=3){
    setScreen("2youWin");
  }
});
onEvent("playAgain", "click", function(){
  setScreen("game2welcome");
});
onEvent("2newGame", "click", function(){
  setScreen("home");
});
//game3
onEvent("start_button", "click", function() {
  score = 0;
  lives = 3;
  setText("total_score", score);
  setText("number_lives", lives);
  setScreen("3screen");
  setPosition("panda", randomNumber(50,280), randomNumber(50, 350));
});
onEvent("panda", "click", function() {
  score = score+1;
  setText("total_score", score);
  if (score==11) {
    setScreen("3youWin");
    onEvent("3another2", "click", function() {
      setScreen("home");
    });
  }
  setPosition("panda", randomNumber(50,280), randomNumber(50, 350));
});
onEvent("background", "click", function() {
  lives = lives-1;
  setText("number_lives", lives);
  if (lives===0) {
    setScreen("3youLose");
    onEvent("3another1", "click", function() {
      setScreen("home");
    });
  }
});
onEvent("playAgain_button", "click", function() {
  setScreen("game3welcome");
});
onEvent("tryAgain_button", "click", function() {
  setScreen("game3welcome");
});

