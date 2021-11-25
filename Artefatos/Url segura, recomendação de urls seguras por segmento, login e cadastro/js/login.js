window.onload = function() {
    _initalizeDB();
}

function _checkUser(){
    var usuario = document.getElementById("usuario").value;
    var senha  = document.getElementById("senha").value;
    if(_validUser(usuario, senha)){
        window.location.href='cadastro.html';
    }else{
        alert("Usuario invalido!!!");
    }
}