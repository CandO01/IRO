
function confirmPayment() {
    // Get the amount from the input field
    const amountInput = document.querySelector('.js-btn1');
    const amount = amountInput.value;

    // Get the element to display the result
    const paymentResult = document.querySelector('.js-payment');

    // Check if the amount is valid
    if (amount >40 && amount<=90) {
        // Display a confirmation message
        paymentResult.textContent = `Payment of $${amount} confirmed.`;
        paymentResult.style.color = 'green';
    } else {
        // Display an error message if the input is invalid
        paymentResult.textContent = 'You have insufficient funds in your account.';
        paymentResult.style.color = 'red';
    }
}

 function keyPress(event){
    let keyPress = event.key;
    if(keyPress === 'Enter'){
        return keyPress = confirmPayment();
    }
   
 }

function subCalling(){
    const buttonElement = document.querySelector('.js-btn12')
    if(buttonElement.innerHTML ==='Subscribe'){
        buttonElement.style.color = 'white';
        setTimeout(function subCalling(){
            buttonElement.innerHTML = 'Subscribed';
        },2000);
        buttonElement.innerHTML ='Loading....'
        buttonElement.classList.add('subscribe');
    }
    else{
        buttonElement.innerHTML ='Unsubscribe';
        buttonElement.style.color = 'white';
    }
    
}

function checkHere(){
    const checkElement = document.querySelector('.js-input');
    if(checkElement.type ==='Password' && checkElement.type === 'Text'){
        checkElement.type = 'Password';
    }
    else{
        checkElement.type = 'Text';
    }
};

