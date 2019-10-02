window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var header= document.getElementById("main")
        p = document.getElementById("text")
        hMain= document.getElementById("h-text")
        menu= document.getElementById("menu");
    if (document.body.scrollTop > 50|| document.documentElement.scrollTop > 50) {
    hMain.style.textAlign = "left"
    hMain.style.fontSize = "13pt"
    header.style.height="50px"
    p.style.fontSize = "8pt"
    p.style.textAlign= "left"
    p.style.letterSpacing = "0"
    menu.style.fontSize = "10pt"
    menu.style.top = "-35px"
    menu.style.left = "40%"
  }
  else {
    hMain.style.textAlign = "center"
    hMain.style.fontSize = "20pt"
    header.style.height ="100px"
    p.style.fontSize = "11pt"
    p.style.textAlign = "center"
    p.style.letterSpacing = "0.2em"
    menu.style.fontSize = "13pt"
    menu.style.top = "0"
    menu.style.left = "0"
  }
}
/*===========================*
 *     Scroll Up Function    *
 *===========================*/
function up() {
    var btn = document.querySelector(".top");

    function scroll() {
        if (window.pageYOffset > 200) {
            btn.style.transform = "scale(1)";
        }
        else {
            btn.style.transform = "scale(0)";
        }
    }
    function top() {
        window.scrollTo(0, 0);
    }
    window.addEventListener("scroll", scroll);
    btn.addEventListener("click", top);
}

    window.addEventListener("DOMContentLoaded", up);
/*===========================*
 *     Show text Functions   *
 *===========================*/
function show(){
document.getElementById("show").style.display="inline";
document.getElementById("btn").style.display="none";
}

function show2(){
document.getElementById("show2").style.display="inline";
document.getElementById("btn2").style.display="none";
}
function show3(){
document.getElementById("show3").style.display="inline";
document.getElementById("btn3").style.display="none";
}

/*===========================*
 *   Menu Slider function    *
 *===========================*/
function openNav(){
    document.getElementById("mySidenav").style.width="60%";
}

function closeNav(){
    document.getElementById("mySidenav").style.width = "0";
}

