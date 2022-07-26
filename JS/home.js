const myModal = new bootstrap.Modal("#transaction-modal");
let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

var data = {
    transactions:[]
};

     
checkLogged();

function checkLogged() {
    if(session) {
        sessionStorage.setItem("logged", session);
        logged = session;
    }
                                                //verificação de login
    if(!logged) {
        window.location.href = 'index.html';
        return;
    }                                         

    const dataUser = localStorage.getItem(logged);     
    if(dataUser) {
        data = JSON.parse(dataUser);
    }
 
}

//botão sair

document.getElementById("button-logout").addEventListener("click", logout);


function logout() {
    sessionStorage.removeItem("logged");
    localStorage.removeItem("session");

    window.location.href = 'index.html';
}

   
    //lançamentos

    document.getElementById("transaction-form") .addEventListener("submit", function(e) {
             e.preventDefault();

            const value = parseFloat(document.getElementById("value-input").value);
            const description = document.getElementById("description-input").value;
            const date = document.getElementById("date-input").value;
            const type = document.querySelector('input[name="type-input"]:checked').value;
                
            myMap = new Map()
            myMap.set('value', value)
            myMap.set('description', description)
            myMap.set('date', date)
            myMap.set('type', type)

            data.transactions.unshift(myMap);
            
            saveData();
            e.target.reset();
            myModal.hide();
            

            alert("Lançamento adicionado com sucesso.");

    })

function saveData(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}