const myModal= new bootstrap.Modal("#registrar-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

checkLogged();

                //criar conta
                  
document.getElementById("criar-modal").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email-criar-input").value;
    const password = document.getElementById("criar-senha-input").value;

    if (email.length < 5) {
        alert("Preencha o campo com um e-mail válido")
        return;
    }

    if (password.length < 4) {
        alert("coloque uma senha com no minimo 4 digitos")
    }
    saveAccount({
        login: email,
        password: password,
        transactions: []
    })
   
    myModal.hide();

    alert("Conta criada com sucesso");
});


function saveAccount(data) {
    localStorage.setItem(data.login, JSON.stringify(data));

}
         
                 //entrar no sistema

document.getElementById("login-login").addEventListener("submit" , function(e){
         e.preventDefault();

         const email = document.getElementById("email-input").value;
         const password = document.getElementById("senha-input").value;
         const sessioncheck = document.getElementById("session-check").checked;
         
         const account = getaAccount(email);

        if(!account){
            alert("Oops!Verifique o usuário ou a senha ");
            return;
        }

        if(account){
            if(account.password !== password){
                alert("Oops!Verifique o usuário ou a senha ");
            return;
            }
            
           SaveSession(email,sessioncheck);

            window.location.href = "home.html";
        }
  

});

function SaveSession (data, SaveSession){
    if(SaveSession){
        localStorage.setItem("session", data);
    }

    sessionStorage.setItem("logged", data);
}


function getaAccount(key) {
    const account = localStorage.getItem(key);

    if (account) {
        return JSON.parse(account);
    }
    return "";
}


function checkLogged(){
    if(session){
       sessionStorage.setItem("logged", session);
       logged = session;
    }
    if(logged){
       SaveSession(logged, session);
       window.location.href = "home.html";
    }
}