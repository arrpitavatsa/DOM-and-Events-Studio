// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() { 
let takeOff = document.getElementById("takeoff");
let flightStatus = document.getElementById("flightStatus");
let shuttleBackground = document.getElementById("shuttleBackground");
let ShuttleHeight = document.getElementById("spaceShuttleHeight");
let land = document.getElementById("landing");
let abortmission = document.getElementById("missionAbort");
let upButton = document.getElementById("up");
let downButton = document.getElementById("down");
let leftButton = document.getElementById("left");
let rightButton = document.getElementById("right");
rocket.style.position = "relative";

takeOff.addEventListener("click",function(){
     
    let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
if(response){
    flightStatus.innerHTML = "Shuttle in flight";
    shuttleBackground.style.backgroundColor = "blue" ;
    ShuttleHeight.innerHTML = Number(ShuttleHeight.innerHTML)+10000 ;
 }
})
 land.addEventListener("click",function(){

    let response = window.confirm("The shuttle is landing. Landing gear engaged.");
    if(response){
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        ShuttleHeight.innerHTML = 0;
    }
 })
  abortmission.addEventListener("click",function(){
let response = window.confirm("Confirm that you want to abort the mission.")
if(response){
    flightStatus.innerHTML = "Mission aborted.";
    shuttleBackground.style.backgroundColor = "green";
    ShuttleHeight.innerHTML = 0;
}

  })

  upButton.addEventListener("clicl",function(){
    
    rocket.style.top = updatePosition(rocket.style.top,false);
  })
  downButton.addEventListener("click",function(){
      rocket.style.takeOff = updatePosition(rocket.style.top,true);
  })
  leftButton.addEventListener("click",function(){
      rocket.style.left = updatePosition(rocket.style.left,false);
  })
  leftButton.addEventListener("click",function(){
      rocket.style.left = updatePosition(rocket.style.left,true);
  })

})
function updatePosition(positionString,positive){
let position = positionString.slice(0,positionString.length - 2);
if(positive){
    return Number(position)+ 10 +"px";
} else{
    return Number(position)- 10 +"px";
}

}