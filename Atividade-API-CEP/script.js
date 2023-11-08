
function DadosTela(dados){
    document.querySelector('.input-logradouro').value = dados.logradouro
    document.querySelector('.input-bairro').value = dados.bairro
    document.querySelector('.input-localidade').value = dados.localidade
    document.querySelector('.input-uf').value = dados.uf
    document.querySelector('.input-ddd').value = dados.ddd
}


async function Buscardados(cep){
    const dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(Response => Response.json());
    DadosTela(dados)
}

function Cliquebotao(){
    const cep = document.querySelector('.input-cep').value
    Buscardados(cep)
}

function Limpar() {
    document.querySelector('.input-logradouro').value = ""
    document.querySelector('.input-bairro').value = ""
    document.querySelector('.input-localidade').value = ""
    document.querySelector('.input-uf').value = ""
    document.querySelector('.input-ddd').value = ""
}