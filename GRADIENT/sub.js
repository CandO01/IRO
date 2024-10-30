function clickSubscribe(){
    const buttonElement = document.querySelector('.js-sub')
    if(buttonElement.innerHTML ==='Subscribe'){
       
        setTimeout(function clickSubscribe(){
             buttonElement.innerHTML = 'Subscribed';
        }, 3000)
        buttonElement.innerHTML = 'Subscribing...';
    }
    else{
        buttonElement.innerHTML = 'Subscribe';
    }
}