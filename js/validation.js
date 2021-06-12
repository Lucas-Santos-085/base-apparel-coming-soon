
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
        insertErrorIcon2();
    }
    });


    function insertErrorIcon(){
        
        const divError = document.querySelector(".alert-error");

        const iconError = document.createElement('span');

        iconError.classList.add('error-icon');

        divError.appendChild(iconError);


    }

    function insertErrorIcon2 (){

        const divError = document.querySelector(".alert-error");
        const img = document.createElement("img");
        img.setAttribute('src', 'js/icon-error.svg');
        divError.appendChild(img);
    }