//Declaring variables.....
var inputTree={height:"",char:""};
var button =document.getElementById("buttonTree");
var tab = "";


//Getting Input from the DOM
function myHeight () {
  inputTree.height = document.getElementById("height").value;
  inputTree.char=document.getElementById("char").value;
  tabFun(inputTree);
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


//function for building the tree in console

function tabFun (inputTree) {
  tree ();
   for(var i=0;i<inputTree.height; i++){
      tab =" ";
      tab = tab.repeat(inputTree.height-i);
      char = inputTree.char.repeat((i+1)+i);
      console.log(tab + char);
 }
}

//function to check the input values for tree
function tree () {

  if ((inputTree.height === "")&& (inputTree.char===""))
  {
    alert("Please enter the input fields");
  } else if(inputTree.height === "")
  {
    alert("Please tell a height value to build the tree ");
  } else if (inputTree.char === "") {
    alert ("Please tell a character to build the tree")
  } else {
    myHeight;
  }

}
