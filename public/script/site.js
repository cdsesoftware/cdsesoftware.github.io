CST_CSS_ROOT = "./public/css/"

CST_ENGLISH_LANGUAGE = "language-en.css";
CST_FRENCH_LANGUAGE = "language-fr.css";
CST_LIGHT_THEME = "site-light.css";
CST_DARK_THEME = "site-dark.css";

CST_KEY_THEME = "csstheme";
CST_KEY_LANGUAGE = "csslanguage";

function Init(event) {  
  SwitchCssTheme(GetPrefTheme());
  SwitchCssLanguage(GetPrefLanguage());
}

/**
 * Recupere le nom du theme css sauvegardé dans le local storage 
 */
function GetPrefTheme() {
   return localStorage.getItem(CST_KEY_THEME);
}

/**
 * Enregistre le theme en parametre, dans le local storage
 * @param cssThemeValue   : theme css (nom de fichier css)
 */
function SetPrefTheme(cssThemeValue) {
  localStorage.setItem(CST_KEY_THEME, cssThemeValue);
}

/**
 * Récupère le nom de la langue css sauvegardé dans le local storage 
 */
function GetPrefLanguage() {
   return localStorage.getItem(CST_KEY_LANGUAGE);
}

/**
 * Enregistre la langue en parametre, dans le local storage
 * @param cssLanguageValue   : language css (nom de fichier css)
 */
function SetPrefLanguageTheme(cssLanguageValue) {
   localStorage.setItem(CST_KEY_LANGUAGE, cssLanguageValue);
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
function SwitchCssTheme(cssThemeValue) {
  let currentCssTheme = document.getElementById("csstheme");
  let tmpThemeValue = cssThemeValue;
  
  if (tmpThemeValue) {
    if (currentCssTheme.href.indexOf(tmpThemeValue) <= 0) {
      currentCssTheme.href = CST_CSS_ROOT + tmpThemeValue;
    }  
  } else {
    if (currentCssTheme.href.indexOf(CST_DARK_THEME) >= 0) {
      tmpThemeValue = CST_LIGHT_THEME;    
    } else {
      tmpThemeValue = CST_DARK_THEME;      
    }      
    currentCssTheme.href = CST_CSS_ROOT + tmpThemeValue;
  }
  SetPrefTheme(tmpThemeValue);
  console.log("SwitchCssTheme 999: " + currentCssTheme.href);  
}

///////////////////////////////////////////////////
// Switch on CSS language file
///////////////////////////////////////////////////
function SwitchCssLanguage(cssLanguageValue) {
  let currentCsslanguage = document.getElementById("csslanguage");
  let tmpLanguageValue = cssLanguageValue;  

  if (tmpLanguageValue) {
    if (currentCsslanguage.href.indexOf(tmpLanguageValue) <= 0) {
      currentCsslanguage.href = CST_CSS_ROOT + tmpLanguageValue;      
    }  
    SetPrefLanguageTheme(tmpLanguageValue);    
  }   
  console.log("SwitchCssTheme 999: " + currentCsslanguage.href);  
}

///////////////////////////////////////////////////
// OnClick Cv 
///////////////////////////////////////////////////
function ClickLocalUrl(localUrl) {
  window.location.href = localUrl;
}

window.onload = Init;
