window.onload = function() {
    _initalizeDB();
    _createHtml();
}

function _createHtml() {
    var itens = document.getElementById("itens");
    itens.innerHTML = "";
    console.log(_empresas());
    var empresas = _empresas();
    for(var i in empresas){
        var div = document.createElement("div");
        div.classList.add("card","border-0","rounded","shadow","my-5");
        itens.appendChild(div);
        var card = document.createElement("div");
        card.classList.add("card-body", "p-4", "p-sm-5");
        div.appendChild(card);
        var row = document.createElement("div");
        row.classList.add('row');
        card.appendChild(row);
        var topDiv = document.createElement("div");
        topDiv.classList.add("col-2", "d-flex", "align-items-center", "justify-content-center");
        row.appendChild(topDiv);
        topDiv.style.height ="30vh";
        var img = document.createElement("img");
        img.classList.add("img-fluid", "img-thumbnail");
        img.src = "images/sem_imagem.jpg";
        img.style.width ="60vh";
        topDiv.appendChild(img);
        var bottomDiv = document.createElement("div");
        bottomDiv.classList.add('col-10');
        row.appendChild(bottomDiv);
        var h5 = document.createElement("h5");
        h5.classList.add("card-title", "text-center", "mb-5", "fw-light", "fs-5", "h4", "d-flex", "align-items-left", "justify-content-left");
        h5.innerHTML = empresas[i].nome;
        bottomDiv.appendChild(h5);
        var p = document.createElement("p");
        p.innerHTML = empresas[i].descricao;
        bottomDiv.appendChild(p);
    }
    
}