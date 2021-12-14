# Avaliação da Aplicação

<span style="color:red">Pré-requisitos: <a href="6-Implementação.md"> Projeto da Solução</a></span>

## Plano de Testes

|Código do teste |Descrição do teste         | Valor digitado              | Retorno esperado |
|----------------|---------------------------|-----------------------------|------------------|
|01              |URL valida e cadastrada    |https://www.google.com       |Seguro            |
|02              |URL valida e não cadastrada|http://www.quadrix.org.br/   |Inseguro          |
|03              |URL invalida               |abc                          |URL invalida!!!   |
|04              |Login de usuario invalido  |usuario: adm - senha: 1      |Usuario invalido!!!|
|05              |Login de usuario valido    |usuario: adm - senha: 123    |Acessar area de cadastro|
|06              |Cadastrar site             |informar todos os campos, concluir |Alertar cadastro com sucesso e limpar tela para novo cadastro|

## Ferramentas de Testes (Opcional)

Utilizamos o [`selenium`](https://www.selenium.dev/documentation/webdriver/) para validamos todos os testes de usuario.

## Avaliação

A partir dos testes verificamos que o sistema tem um tempo de processamento bastante lento para as url's. Pretendemos melhorar isso na versão 2.
