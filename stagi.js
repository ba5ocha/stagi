

const department=["https://i.pinimg.com/564x/94/26/0b/94260b281bb43f4b992dc1bab39dc001.jpg",
"https://i.pinimg.com/564x/bc/22/e3/bc22e3e32bdb26e23e056554d8d2f2c6.jpg",
"https://i.pinimg.com/564x/ea/e1/09/eae109bd6c4d0072862484171b044258.jpg",
"https://i.pinimg.com/564x/2f/89/b4/2f89b4e4c7e1f59f3c58b557d8934605.jpg",]


var div = document.getElementById("departments")

var div2= document.createElement("div")

div2.innerHTML="<img id ='img' src = " + department[0] + " onclick='toggleImage(img)'>" 

div.appendChild(div2)



function toggleImage(img) {
  
  var currentelement = department.indexOf(img.src);

  var nextelement = (currentelement + 1 ) % department.length ;

  img.src = department[nextelement];

}
/*setTimeout(toggleImage,2000);*/

var IT=["computerscience","computer science","computer"];
var Mec=["mechanical","mechanical engineering","mecanique"];
var Elec=["electrical","electrical engineering","electrique"];


 function verif (){
  sear= f.T1.value;
  if(sear == ""){
    alert(" invalide input !!");
    return false;
  }
  else if(IT.includes(sear)){
    window.open("dep cs/department CS.html")
  }
  else if(Mec.includes(sear)){
    window.open("dep mec/department M.html")
  }
  else if(Elec.includes(sear)){
    window.open("dep elec/department E.html")
  }
  else{
    alert("wait for the next update :* ")
  } 
}
/*function space() {
  var s = document.getElementById("space");
  var div = document.createElement("div");
  for (let i = 0; i < 300; i++) {
    div.innerHTML += '&nbsp;';
  }
  s.appendChild(div);
}*/

/*window.onload = space;*/


 
