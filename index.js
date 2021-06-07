alert("Hello! This is a vitual drum kit. You can either click on the icons or press the corresponding keys....")


for(var i=0;i<document.querySelectorAll("button").length;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",funcall);
}
function funcall(){

  listen(this.innerHTML);

  buttonAnimation(this.innerHTML);

}

function funcall1(){
  listen(event.key);
  buttonAnimation(event.key);
}



function listen(buttonInnerHTML)
{

  var buttonInnerHTML;

  switch(buttonInnerHTML)
  {
    case "w" : var tom1=new Audio("sounds/tom-1.mp3");
               tom1.play();
               break;

    case "a" : var tom2=new Audio("sounds/tom-2.mp3");
               tom2.play();
               break;

    case "s" : var tom3=new Audio("sounds/tom-3.mp3");
              tom3.play();
              break;

    case "d" : var tom4=new Audio("sounds/tom-4.mp3");
              tom4.play();
              break;

    case "j" : var snare=new Audio("sounds/snare.mp3");
              snare.play();
              break;

    case "k" : var crash=new Audio("sounds/crash.mp3");
              crash.play();
              break;

    case "l" : var kick=new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;

    default : console.log("wrong");
  }

}

document.addEventListener("keydown",funcall1);

function buttonAnimation(currentKey)
{

  document.querySelector("."+currentKey).classList.add("pressed");

  setTimeout(function(){
    document.querySelector("."+currentKey).classList.remove("pressed");
  },100);


}
