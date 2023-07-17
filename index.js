const menu = document.getElementsByClassName("menu")[0];
const loginScn = document.getElementById("l-scn");
const signUpScn = document.getElementById("s-scn");

const PopUpScreen = () => {    
  if (loginScn.style.display === "none") {
    loginScn.style.display = "flex";
    menu.style.display = "none";
  } else {
    loginScn.style.display = "none";
  }
};

const SignUpScreen = () => {    
  if (signUpScn.style.display === "none") {
    signUpScn.style.display = "flex";
    menu.style.display = "none";
  } else {
    signUpScn.style.display = "none";
  }
};

const ClosePopUpScreen = () => {
  loginScn.style.display = "none";
  signUpScn.style.display = "none";
};

const toggleMenu = () => {    
    if (menu.style.display === "none") {
      menu.style.display = "flex";
    } else {
      menu.style.display = "none";
    }
};

const regInstead = () => {
  if(signUpScn.style.display === "flex") {
    signUpScn.style.display = "none";
    loginScn.style.display = "flex";
  }
};

const loginInstead = () => {
  if(loginScn.style.display === "flex") {
    loginScn.style.display = "none";
    signUpScn.style.display = "flex";
  }
};

