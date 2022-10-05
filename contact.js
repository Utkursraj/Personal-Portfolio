const nameInput= document.querySelector("#name");
const emailInput= document.querySelector("#email");
const messageInput= document.querySelector("#message");
const success= document.querySelector("#success");
const errorNodes= document.querySelectorAll(".error")

function validateform() {
    clearMessages();


if(nameInput.value.length < 1){
 
    errorNodes[0].innerText = "Name Cannot be blank";
    nameInput.classList.add("error-border");
}
if(!emailIsvalid(email.value)){
 
    errorNodes[1].innerText = "Invalid Email address";
    email.classList.add("error-border");

}
if(message.value.length < 1){
    errorNodes[2].innerText = "Please Enter the message";
    message.classList.add("error-border");
}

}

function clearMessages(){
    for(let i=0; i< errorNodes.length; i++){
        errorNodes[i].innerHTML = "";

    }
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}

function emailIsvalid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}

