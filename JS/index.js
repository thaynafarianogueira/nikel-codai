//criar conta
document.getElementById("criar-modal").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email-criar-input").Value;
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
        transction: []
    })
    myModal.hide();

    alert("Conta criada com sucesso");
});

function saveAccount(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}

function getaAccount(key) {
    const account = localStorage.getItem(key);

    if (account) {
        return JSON.parse(account);
    }
    return "";
}
