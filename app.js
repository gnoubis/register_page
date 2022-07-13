const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e)=> {
    e.preventDefault();

    checkInputs();
});
function checkInputs(){
    

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();


    if(usernameValue === '')
    {
        
        setErrorFor(username,"le nom d'utilisateur ne peut etre vide")
    }else
    {
      
       setSuccessFor(username); 
    }

    if(emailValue === '')
    {
        
        setErrorFor(email,"l'adresse mail  ne peut etre vide")
    }else
    {
       
       setSuccessFor(email); 
    }

    if(passwordValue === '')
    {
        
        setErrorFor(password,"le mot de passe ne peut etre vide")
    }else
    {
       
       setSuccessFor(password); 
    }
    if(password2Value === '')
    {
       
        setErrorFor(password2,"Veuillez confirmer votre mot de passe")
    }else if(passwordValue !== password2Value)
    {
        setErrorFor(password2,"les mots de passe ne correspondent pas")

    }else
    {
       
       setSuccessFor(password2); 
    }
}
function setErrorFor(input, message)
{
    const formControl = input.parentElement; 
    const small = formControl.querySelector('small');

   
    small.innerText = message;

   
    formControl.className = 'form-control error';
}
function setSuccessFor(input)
{
    const formControl = input.parentElement; 
    formControl.className = 'form-control success';
    

}