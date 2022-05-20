function Init(event) {
    alert("coucou");
} 

///////////////////////////////////////////////////
// Adding a valued note (stars) to a div (identified by idcompetence)
///////////////////////////////////////////////////
function SetCompetenceNote(idcompetence, note) {
  let compDiv = document.getElementById(idcompetence);
  for (let cpt=1; cpt <= 10; cpt++) {
    let elem = document.createElement("img");
    if (cpt <= note) {
        //elem.setAttribute("src", "./public/img/star-blue-56x53.png");
        elem.setAttribute("src", "./public/img/level-dot-pink-16x16.png");
    } else {
        //elem.setAttribute("src", "./public/img/star-grey-56x53.png");
        elem.setAttribute("src", "./public/img/level-dot-grey-16x16.png");
    }    
    elem.setAttribute("class", "generic-star");
    compDiv.appendChild(elem);
  }
}


///////////////////////////////////////////////////
// Switch on CSS loaded file
///////////////////////////////////////////////////
function SwitchCss() {
  console.log("SwitchCss 001");
  let cssLink = document.getElementById("csslink");
  console.log("SwitchCss 002 : " + cssLink.href);  
  let darkCss = "site-dark.css";
  let lightCss = "site-light.css";
  if (cssLink.href.indexOf(darkCss) >= 0) {
    console.log("SwitchCss 003");    
    cssLink.href = cssLink.href.replace(darkCss, lightCss);
  } else {
    console.log("SwitchCss 004");    
    cssLink.href = cssLink.href.replace(lightCss, darkCss);
  }    
  console.log("SwitchCss 999 : " + cssLink.href);  
}
//window.onload = Init;
