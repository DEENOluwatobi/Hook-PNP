const menu = document.getElementsByClassName("menu")[0];
const loginScn = document.getElementById("l-scn");
const signUpScn = document.getElementById("s-scn");

const PopUpScreen = () => {    
  if (loginScn.style.display === "flex") {
    loginScn.style.display = "none";
    menu.style.display = "flex";
  } else {
    loginScn.style.display = "flex";
  }
};

const SignUpScreen = () => {    
  if (signUpScn.style.display === "flex") {
    signUpScn.style.display = "none";
    menu.style.display = "flex";
  } else {
    signUpScn.style.display = "flex";
  }
};

const ClosePopUpScreen = () => {
  loginScn.style.display = "none";
  signUpScn.style.display = "none";
};

const toggleMenu = () => {    
    if (menu.style.display === "flex") {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
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

