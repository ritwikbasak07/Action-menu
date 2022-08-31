let body = document.querySelector('body');
let dark = document.getElementById("dark");


dark.onclick = function(){
    if(dark.checked){
        body.classList.add('darkMode');
    }else{
        body.classList.remove('darkMode');
    }
}