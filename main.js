const fish = document.getElementById("fish");
const coral  = document.getElementById("coral");
document.addEventListener("keydown",function(event)
{
jump();
});
function jump (){ 
    if(fish.classList !="jump" ){     
    fish.classList.add("jump")
} 
setTimeout( function() { 
fish.classList.remove("jump")
 }, 300)}

 let isAlive = setInterval (function(){
let fishTop =parseInt(window.getComputedStyle(fish).getPropertyValue("top"));
let coralLeft =parseInt(window.getComputedStyle(coral).getPropertyValue("left"));
if (coralLeft < 50 && coralLeft  > 0 && fishTop >= 140){
    alert("game over")
}}
,10)

