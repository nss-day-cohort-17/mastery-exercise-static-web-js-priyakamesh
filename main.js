//Declaring variables.....
var inputTree={height:"",char:""};
var button =document.getElementById("buttonTree");
var tab = "";


//Getting Input from the DOM
function myHeight () {
  inputTree.height = document.getElementById("height").value;
  inputTree.char=document.getElementById("char").value;
  tree(inputTree);
}
//KeyPress Event Function
function kbevt(event) {
    if(event.keyCode === 13) {
      myHeight();
    }
}
//added click event listener
button.addEventListener("click",myHeight);
//added keypress event listener

document.addEventListener("keyPress",kbevt);


//function for creating space in console

function tabFun () {

   for(var i=0;i<inputTree.height; i++){
      tab =" ";
      tab = tab.repeat(inputTree.height-i);
      char = inputTree.char.repeat((i+1)+i);
      console.log(tab + char);
 }
  return tab;
}

//function to grow tree
function tree (inputTree) {

  if ((inputTree.height==="")&&(inputTree.char==="")) {
    alert("Please tell how tall your tree should be and a character to grow a tree");
  }else {
    tabFun();
    alert("Please have a look at your Pine Tree in the console");
  }
}
