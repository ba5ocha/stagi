var img=["https://www.3dnetinfo.com/assets/Logo%20netinfo-01.svg",
"https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_533,h_279/https://3wwit.com/wp-content/uploads/2020/12/logo-1.png",
"https://b3000391.smushcdn.com/3000391/wp-content/uploads/2023/01/logos-neopolis-dev-site-refont-1.png?lossy=1&strip=1&webp=1"];

var description=["NET-INFO est une école d'Art et de technologie spécialisée dans la formation aux métiers de la production de l'image de synthèse 3D,de l'animation et des jeux...",
"3WWIT est une équipe d'ingénieurs jeune, dynamique spécialisé dans la mise en place de solutions sur-mesure pour nos différents clients. On travail sur des solutions de CRM,ERP ou e-commerce à haute valeurs ajoutés. Ne hésitez pas à prendre contact avec nous pour vos projets!",
"NEOPOLIS DEVELOPMENT développe en offshore, nearshore et met à disposition des ressources humaines informatiques en matière de compétences et d’édition de logiciels CRM/BPM destinés à différents métiers (assurance, banque...)"];

var text = document.getElementById('text');
var table = 
'<table id="tableEdit"><thead><tr><th>ID</th><th>Company</th><th>Description</th></tr></thead><tbody>';
for(var i =0;i<description.length;i++){
    table+='<tr class="trr"><td>'+(i+1)+'</td><td><img class="NET-INFO" src='+img[i]+'> </td><td>'+description[i]+'</td></tr>'

}
table+='</tbody></table>';
text.innerHTML=table;



var tableEdit=document.getElementById("tableEdit");
var index;
for (let i = 0;i< tableEdit.rows.length; i++){
    tableEdit.rows[i].onclick=function(){
        index=this.rowIndex;
        console.log(index)

        document.getElementById("fimg").src=this.cells[1].innerHTML;
        document.getElementById("fdesc").value=this.cells[2].innerHTML;

    }
}

function edit() {
    var editedImgSrc = document.getElementById("fimg").src;
    var editedDesc = document.getElementById("fdesc").value;

    tableEdit.rows[index].cells[1].innerHTML = '<img class="NET-INFO" src="' + editedImgSrc + '">';
    tableEdit.rows[index].cells[2].innerHTML = editedDesc;
    console.log(editedDesc)
}


