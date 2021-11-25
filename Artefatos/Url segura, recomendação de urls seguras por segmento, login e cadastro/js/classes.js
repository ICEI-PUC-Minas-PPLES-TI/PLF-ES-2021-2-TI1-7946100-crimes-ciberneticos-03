class Empresa {
    constructor(urlPadrao, cnpj, telefone, email, cpf, emailResponsavel, telefoneResponsavel, ramo, descricao, nome, foto) {
        this.urlPadrao = urlPadrao;
        this.cnpj = cnpj;
        this.telefone = telefone;
        this.email = email;
        this.ramo = ramo;
        this.descricao = descricao;
        this.nome = nome;
        this.foto = foto;
        this.responsavel = new Responsavel(cpf, emailResponsavel, telefoneResponsavel);
    }
}

class Responsavel {
    constructor(cpf, emailResponsavel, telefoneResponsavel) {
        this.cpf = cpf;
        this.telefoneResponsavel = emailResponsavel;
        this.emailResponsavel = telefoneResponsavel;
    }
}

class Usuario {
    constructor(user, password) {
        this.user = user;
        this.password = password;
    }   
}