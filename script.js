  
var locate=[
  {name:"JLN",status:2},
  {name:"SDK",status:2},
  {name:"PTT",status:2},
  {name:"PQR",status:1},
  {name:"UKN",status:0}
];
 var ele=document.querySelector(".map-container");
 

var setPoints = function(){
  var mar = document.querySelector(".pointer");
  var rect3 = ele.getBoundingClientRect();
mar.style.top=rect3.top + "px";
  mar.style.left=rect3.left + "px";
}
setPoints();
var create = function(){

 var wid =  ele.offsetWidth;
 for(var i=0;i<locate.length;i++){
    var newE = document.createElement("div");
    newE.className = "child";
   if(locate[i].status==2){
     newE.style.backgroundColor="green";
     newE.style.borderColor="orangeRed";
   }
   else if(locate[i].status==1){
     newE.style.backgroundColor="orange";
     flag=i;
     newE.classList.add("active-locate")
   }
     
   else
     newE.style.backgroundColor="white";
    ele.appendChild(newE);
    var nSpan =document.createElement("span");
    nSpan.className="child-place";
     nSpan.innerHTML = locate[i].name;
     newE.appendChild(nSpan);
 }
  
}
create();
var marker = function(){
 var mar = document.querySelector(".pointer");
  var mar_end = document.querySelector(".active-locate");

  var rect = ele.getBoundingClientRect();
  var rect2 = mar_end.getBoundingClientRect();
  console.log(rect.top, rect.right, rect.bottom, rect.left);
  mar.style.position="absolute";
  mar.style.top=rect.top + "px";
  mar.style.left=rect.left + "px";
   var widParts = rect2.left-rect.left;
  console.log(rect2.left);
  k=rect.left;
   mar.style.width=(widParts+13) + "px";
}
