window.onload = function() {
    _initalizeDB();
    _ativarElementoSeguro(false, false);
}

function _ativarElementoSeguro(isSeguro, isInseguro){
    var seguro = document.getElementById("seguro");
    var inseguro  = document.getElementById("inseguro");
    
    if(isSeguro == true){
        seguro.classList.add('d-flex');
        seguro.classList.remove('d-none');
        inseguro.classList.add('d-none');
        inseguro.classList.remove('d-flex'); 
    }else if(isInseguro == true){
        inseguro.classList.add('d-flex');
        inseguro.classList.remove('d-none');
        seguro.classList.add('d-none');
        seguro.classList.remove('d-flex');
    }else{
        inseguro.classList.add('d-none');
        inseguro.classList.remove('d-flex');
        seguro.classList.add('d-none');
        seguro.classList.remove('d-flex');
    }
}

function _isSegure(){
    var url = document.getElementById("url").value;
    if(isURL(url)){
        let domain = (new URL(url));
        if(_checkUrl(domain.hostname.replace('www.',''))){
            _ativarElementoSeguro(true, false);
        }else{
            _ativarElementoSeguro(false, true);
        }
    }else{
        alert("URL Inválida!!!");
    }
}

function isURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }