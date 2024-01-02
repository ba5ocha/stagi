/*function entreprice (desc,tel,adr){
    return{
        description:desc,
        telephone: tel,
        adresse:adr
    }
}

const en = [];




var div=document.getElementById("ent")

 var div2=document.createElement("div")

 div2.innerHTML= "<img class='NET-INFO' src='https://b3000391.smushcdn.com/3000391/wp-content/uploads/2023/01/logos-neopolis-dev-site-refont-1.png?lossy=1&strip=1&webp=1'"+">"

 div.appendChild(div2)



 var div1=document.createElement("tr")
 const descri =document.createTextNode("NEOPOLIS DEVELOPMENT développe en offshore, nearshore et met à disposition des ressources humaines informatiques en matière de compétences et d’édition de logiciels CRM/BPM destinés à différents métiers (assurance, banque...)")
 div1.appendChild(descri)
 document.getElementById("ent1").appendChild(div1)


*/
var img=["https://www.3dnetinfo.com/assets/Logo%20netinfo-01.svg",
"https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_533,h_279/https://3wwit.com/wp-content/uploads/2020/12/logo-1.png",
"https://b3000391.smushcdn.com/3000391/wp-content/uploads/2023/01/logos-neopolis-dev-site-refont-1.png?lossy=1&strip=1&webp=1"];

var description=["NET-INFO est une école d'Art et de technologie spécialisée dans la formation aux métiers de la production de l'image de synthèse 3D,de l'animation et des jeux...",
"3WWIT est une équipe d'ingénieurs jeune, dynamique spécialisé dans la mise en place de solutions sur-mesure pour nos différents clients. On travail sur des solutions de CRM,ERP ou e-commerce à haute valeurs ajoutés. Ne hésitez pas à prendre contact avec nous pour vos projets!",
"NEOPOLIS DEVELOPMENT développe en offshore, nearshore et met à disposition des ressources humaines informatiques en matière de compétences et d’édition de logiciels CRM/BPM destinés à différents métiers (assurance, banque...)"];

var text = document.getElementById('text');
var table = 
'<table id="tableEdit"><thead><tr><th>ID</th><th>Company</th><th>Description</th><th>Action</th></tr></thead><tbody>';
for(var i =0;i<description.length;i++){
    table+='<tr class="trr"><td>'+(i+1)+'</td><td><img class="NET-INFO" src='+img[i]+'> </td><td>'+description[i]+'</td><td><button class="button" onclick="supprimerentre()"><svg viewBox="0 0 448 512" class="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg></button><br><a href="dep cs/modif/modif.html"><button class="button" onclick="trans="edit()"><i class="bx bx-edit-alt"></i></button></a></td></tr>'

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
