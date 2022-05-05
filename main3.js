const chicken = document.getElementById("chicken");
const tree  = document.getElementById("tree");
document.addEventListener("keydown",function(event)
{
jump();
});
function jump (){ 
    if(chicken.classList !="jump" ){     
    chicken.classList.add("jump")
} 
setTimeout( function() { 
chicken.classList.remove("jump")
 }, 300)}

 let isAlive = setInterval (function(){
let chickenTop =parseInt(window.getComputedStyle(chicken).getPropertyValue("top"));
let treeLeft =parseInt(window.getComputedStyle(tree).getPropertyValue("left"));
if (treeLeft < 50 && treeLeft  > 0 && chickenTop >= 140){
    alert("game over")
}}
,10)
