var locate=[{name:"JLN",status:0},{name:"PQR",status:0},{name:"UKN",status:0}];
var create = function(){
 var ele=document.querySelector(".map-container");
 var wid =  ele.offsetWidth;
 for(var i=0;i<locate.length;i++){
    var newE = document.createElement("div");
    newE.className = "child";
    console.log(wid);
    ele.appendChild(newE);
    var nSpan =document.createElement("span");
    nSpan.className="child-place";
     nSpan.innerHTML = locate[i].name;
     newE.appendChild(nSpan);
 }
  
}
create();