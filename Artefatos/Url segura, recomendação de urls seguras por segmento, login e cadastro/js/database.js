var empresas = [new Empresa("https://www.google.com.br/","06.990.590/0001-23",
"0800 047 4795", "não disponivel", "não disponivel", "não disponivel", 
"não disponivel", "Provedores de busca", 
"O Google, também conhecido como Gigante das Buscas, é uma empresa multinacional que oferece serviços online e softwares para download. ... Para garantir que você está usando mesmo o Google, pode marcá-lo como página inicial e navegador padrão. O site Google.com é a página mais visitada do mundo.", 
"Google", ""), 
new Empresa("https://www.magazineluiza.com.br/","47.960.950/0001-21",
"0800-310-0002", "não disponivel", "052.571.868-02", "não disponivel", 
"0800 34 4000", "varejo", "A Magazine Luiz foi fundada em 1959 por Luiza Trajano Donato e Pelegrino José Donato e é uma das maiores redes varejistas do Brasil, contando com mais de 1000 lojas espalhadas por todo o país e empregando mais de 30000 funcionários.", 
"Magazine Luiza", "")];

var usuarios = [new Usuario("adm","123"), new Usuario("teste","123"), new Usuario("dev", "123")];

function _initalizeDB(){
    localStorage.clear();
    localStorage.setItem('empresas', JSON.stringify(empresas));
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

function _checkUrl(url){
var empresasLocal = JSON.parse(localStorage.getItem("empresas"));
    for (var i in empresasLocal){
        if(empresas[i].urlPadrao.includes(url)){
            return true;
        }
    }
    return false;
}

function _validUser(usuario, senha){
    var localUsuarios = JSON.parse(localStorage.getItem("usuarios"));
    for (var i in localUsuarios){
        if(localUsuarios[i].user == usuario){
            if(localUsuarios[i].password == senha){
                return true;
            }
        }
    }
    return false;
}

function _empresas(){
    return JSON.parse(localStorage.getItem("empresas"));
}