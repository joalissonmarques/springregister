const formulario = document.querySelector("form");
const Inome = document.querySelector("#nome");
const Iemail = document.querySelector("#email");
const Itelefone = document.querySelector("#telefone");
const Isenha = document.querySelector("#senha");

function cadastrar(){
    fetch("http://localhost:8000/cadastrar", 
    {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            nome: Inome.value,
            email: Iemail.value,
            telefone: Itelefone.value,
            senha: Isenha.value
        })
    })
    .then(function (req, res) {
        console.log(res);
    })
    .catch(function (req, res) {
        console.log(res);
    })
};

function limpar(){
    Inome.value = "";
    Iemail.value = "";
    Itelefone.value = "";
    Isenha.value = "";
}

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    cadastrar();
    limpar();
});

