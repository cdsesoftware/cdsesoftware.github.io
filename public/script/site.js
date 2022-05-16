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
        elem.setAttribute("src", "./public/img/star-blue-64x64.png");
    } else {
        elem.setAttribute("src", "./public/img/star-grey-64x64.png");
    }    
    elem.setAttribute("class", "generic-star");
    compDiv.appendChild(elem);
  }
}

//window.onload = Init;
