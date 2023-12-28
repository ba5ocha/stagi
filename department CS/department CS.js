function entreprice (desc,tel,adr){
    return{
        description:desc,
        telephone: tel,
        adresse:adr
    }
}

const en = [
    { description:"NET-INFO est une école d'Art et de technologie spécialisée dans la formation aux métiers de la production de l'image de synthèse 3D,de l'animation et des jeux...",
        telephone:"(+216) 53 269 000 (+216) 55 555 538",adresse:"Tunis, Nabeul"}
];


 var div=document.getElementById("ent")

 var div2=document.createElement("div")

 div2.innerHTML= "<img class='NET-INFO' src='https://b3000391.smushcdn.com/3000391/wp-content/uploads/2023/01/logos-neopolis-dev-site-refont-1.png?lossy=1&strip=1&webp=1'"+">"

 div.appendChild(div2)



 var div1=document.createElement("tr")
 const descri =document.createTextNode("NEOPOLIS DEVELOPMENT développe en offshore, nearshore et met à disposition des ressources humaines informatiques en matière de compétences et d’édition de logiciels CRM/BPM destinés à différents métiers (assurance, banque...)")
 div1.appendChild(descri)
 document.getElementById("ent1").appendChild(div1)















function ajouterentre(e){
    en.push(e);
    console.log("Ajout avec succes : "+ e.description);
}

function supprimerentre(e){
    const index =en.indexOf(e, 0);
    var row = document.getElementsByClassName("trr")[index + 1]
    if (row) {
        row.remove();
    }
    
}

function modifierentr(e) { 
    supprimerentre(e); 
    ajouterentre(e); 
} 
