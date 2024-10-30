function clickButton(){
    const buttonElement = document.querySelector('.js-btn');
    if(!buttonElement.classList.contains('is-toggled')){
        buttonElement.classList.add('is-toggled');
        buttonElement.innerHTML ='ON'
    }
    else{
        buttonElement.classList.remove('is-toggled');
         buttonElement.innerHTML ='OFF'
    }
}
//let comeNow = function (pay){
  //  return(pay+300);
//}
//let now = comeNow(3000);
//console.log(now);