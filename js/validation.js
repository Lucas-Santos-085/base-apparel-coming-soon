
    var arrowButton = document.querySelector(".submit");

    arrowButton.addEventListener("click", function(event) {
    
    event.preventDefault();

    const inputEmail = document.querySelector(".input");
    const errorEmail = document.querySelector(".error-message");

    if(inputEmail.validity.valid) {
        errorEmail.innerHTML = '';
        console.log("email válido")
    } else {
        console.log("email inválido")
        errorEmail.innerHTML = 'Please provide a valid email';
    }
    });