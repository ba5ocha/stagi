/*var div=document.getElementById("ent")

 var div2=document.createElement("div")

 div2.innerHTML= "<img class='NET-INFO' style='width: 200px; height: 150px;' src='https://www.tanitjobs.com/files/pictures/2021/02/24/0_32.png'"+">"

 div.appendChild(div2)



 var div1=document.createElement("tr")
 const descri =document.createTextNode("CED est une société de gestion des sinistres fondée en 1971, initialement en joint-venture établie par les principaux assureurs aux Pays Bas afin de mutualiser leurs réseaux d'experts.")
 div1.appendChild(descri)
 document.getElementById("ent1").appendChild(div1)*/

var img=["https://bewireless-solutions.com/wp-content/uploads/2018/09/logo-02.png",
"http://www.made-in-tunisia.net/_medias_files/et_files/ent_4860043650.jpg",
"https://www.tanitjobs.com/files/pictures/2021/02/24/0_32.png"];
 
var description=["La société Be Wireless Solutions (BWS) créée en 2016, ayant obtenu la License IoT en 2017 et le label start up en 2019.",
"Maîtriser les fonctions de gestion du chauffage, de l’éclairage et des volets roulants avec le système KNX.Gérer ces équipements par écran tactile.",
"CED est une société de gestion des sinistres fondée en 1971, initialement en joint-venture établie par les principaux assureurs aux Pays Bas afin de mutualiser leurs réseaux d'experts."]

var text = document.getElementById('text');
var table = 
'<table id="tableEdit"><thead><tr><th>ID</th><th>Company</th><th>Description</th><th>Action</th></tr></thead><tbody>';
for(var i =0;i<description.length;i++){
    table+='<tr class="trr"><td>'+(i+1)+'</td><td><img class="NET-INFO" src='+img[i]+'> </td><td>'+description[i]+'</td><td><button class="button" onclick="supprimerentre()"><svg viewBox="0 0 448 512" class="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg></button></td></tr>'

}
table+='</tbody></table>';
text.innerHTML=table;












function ajouterentre(e){
    en.push(e);
    console.log("Ajout avec succes : "+ e.description);
}

var index;
for (let i = 1;i< tableEdit.rows.length; i++){
    tableEdit.rows[i].onclick=function(){
        index=this.rowIndex;
        console.log(index)
    }
}
function supprimerentre() {
    if (index >= 0 ) {
        tableEdit.deleteRow(index);
        alert(" Are you sure ??????????????")
    } else {
        console.log("Invalid row index: " + index);
    }
}

function modifierentr(e) { 
    supprimerentre(e); 
    ajouterentre(e); 
} 
