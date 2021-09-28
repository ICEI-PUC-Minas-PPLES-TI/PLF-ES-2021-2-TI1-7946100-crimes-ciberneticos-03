# Especificações Do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Contexto.md"> Documentação de Contexto</a></span>

> Requisitos funcionais e não funcionais,
> restrições, 
> historias de usuario,
> personas.

## Personas

Elisiana Muniz de Azevedo tem 38 anos, é farmaceutica recém-formada.
Pensa em se desenvolver profissionalmente através da pós graduação.

Maria do Carmo tem 42 anos, é costureira atua a anos com isso.
Pensa em abrir um negocio proprio.

Bruna tem 24 anos, é youtuber.
Pensa em abrir um negocio proprio é contuar negocio digital que já da certo.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Usuário do sistema | Verificar por categoria            | Ter outras opções de compra segura.    |
|                    | sites seguros                      |                                        |
|--------------------|------------------------------------|----------------------------------------|
| Usuário do sistema | Digitar uma url e ver se é segura  | Ter certeza que esta comprando com     |
|                    |                                    | seguranca                              |
|--------------------|------------------------------------|----------------------------------------|
| Administrador do   | Habilitar/Desabilitar cadastro     | Site pode ter sido cadastrado sem      |
| sistema            | de sites seguros                   | ser realmente seguro                   |
|--------------------|------------------------------------|----------------------------------------|
| Administrador do   | Cadastrar novos sites              | Incluir site na base de dados          |
| sistema            |                                    | do sistema                             |
|--------------------|------------------------------------|----------------------------------------|
| Administrador do   | Excluir cadastros de sites         | Remover site da base de dados          |
| sistema            |                                    | do sistema                             |
|--------------------|------------------------------------|----------------------------------------|
| Administrador do   | Alterar cadastros de sites         | Alterar site da base de dados          |
| sistema            |                                    | do sistema                             |
|--------------------|------------------------------------|----------------------------------------|

Elisiana: Quero entrar em um site que eu me sinta segura ao comprar.
Maria do Carmo: Quero ter certeza que não estou entregando meus dados para alguem mal intencionado.
Bruna: Quero comprar e indicar para meus seguidores algo confiavel.

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito                                              | Prioridade |
|------|---------------------------------------------------------------------|------------|
|RF-001| Permitir que o usuario verifique pela url se um site é seguro       | ALTA       | 
|RF-002| Permitir que o usuario verifique pela categoria se um site é seguro | ALTA       |
|RF-003| Permitir que o administrador cadastre novos sites                   | MÉDIA      |
|RF-004| Permitir que o administrador altere cadastros ja existentes         | MÉDIA      |
|RF-004| Permitir que o administrador exclua cadastros ja existentes         | MÉDIA      |
|RF-004| Permitir que o administrador habilite/desabilite cadastros          | MÉDIA      |


### Requisitos não Funcionais

|ID     | Descrição do Requisito                                            |Prioridade |
|-------|-------------------------------------------------------------------|-----------|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA     | 
|RNF-002| O sistema responder em tempo maximo de 5s                         | MÉDIA     | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O sistema não funciona sem internet                   |
|02| O sistema não funciona com url's invalidas            |
|03| Obrigatório preenchimento da URL                      |