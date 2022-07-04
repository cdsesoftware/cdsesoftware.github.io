CST_LIGHT_THEME_VALUE = 0;
CST_DARK_THEME_VALUE = 1;

CST_LIGHT_THEME = "site-light.css";
CST_DARK_THEME = "site-dark.css";

currentThemeValue = "";

function Init(event) {
    let url = new URL(window.location.href);    
    let argTheme = url.searchParams.get("argtheme");
    currentThemeValue = CST_LIGHT_THEME_VALUE;
    if (argTheme == CST_DARK_THEME_VALUE) {
      SwitchCss();
    }    
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
  let cssLink = document.getElementById("csslink");
  let darkCss = CST_DARK_THEME ;
  let lightCss = CST_LIGHT_THEME;
  if (cssLink.href.indexOf(darkCss) >= 0) {
    cssLink.href = cssLink.href.replace(darkCss, lightCss);
    currentThemeValue = CST_LIGHT_THEME_VALUE;
  } else {
    cssLink.href = cssLink.href.replace(lightCss, darkCss);
    currentThemeValue = CST_DARK_THEME_VALUE;
  }      
  console.log("SwitchCss 999 : " + cssLink.href);  
}

///////////////////////////////////////////////////
// Switch on CSS loaded file
///////////////////////////////////////////////////
function SwitchLanguage(sLanguage) {  
  let csslanguage = document.getElementById("csslanguage");
  let cssEnglish = "./public/css/language-en.css";
  let cssFrench = "./public/css/language-fr.css";

  if (sLanguage == "fr") {
    csslanguage.href = cssFrench;
  } else {
    csslanguage.href = cssEnglish;
  }      
}

///////////////////////////////////////////////////
// OnClick Cv 
///////////////////////////////////////////////////
function ClickLocalUrl(localUrl) {
  window.location.href = `./${localUrl}?argtheme=${currentThemeValue}`;
}

///////////////////////////////////////////////////
// OnLoad Css Theme
///////////////////////////////////////////////////
function LoadCssTheme(){
  alert(currentThemeValue);
  switch (currentThemeValue) {
    case CST_DARK_THEME_VALUE : 
      return CST_DARK_THEME;
    case CST_LIGHT_THEME_VALUE : 
      return CST_LIGHT_THEME;
    default :
      throw new error("Theme non reconnu : " + currentThemeValue);
  }
}


window.onload = Init;
