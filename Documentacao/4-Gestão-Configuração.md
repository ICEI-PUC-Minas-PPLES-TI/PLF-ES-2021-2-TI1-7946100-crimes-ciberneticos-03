# Gestão de Configuração

> `Git`: Versionamento.
>
> `Github`: Armazenar repositorios remotos.

## Controle de Versão

A ferramenta de controle de versão adotada no projeto foi o
[Git](https://git-scm.com/), sendo que o [Github](https://github.com)
foi utilizado para hospedagem do repositório `upstream`.

O projeto segue a seguinte convenção para o nome de branchs:

- [`master`](https://github.com/ICEI-PUC-Minas-PPLES-TI/PLF-ES-2021-2-TI1-7946100-crimes-ciberneticos-03): versão estável já testada do software
- [`unstable`](https://github.com/ICEI-PUC-Minas-PPLES-TI/PLF-ES-2021-2-TI1-7946100-crimes-ciberneticos-03/tree/unstable): versão já testada do software, porém instável
- [`testing`](https://github.com/ICEI-PUC-Minas-PPLES-TI/PLF-ES-2021-2-TI1-7946100-crimes-ciberneticos-03/tree/testing): versão em testes do software
- [`dev`](https://github.com/ICEI-PUC-Minas-PPLES-TI/PLF-ES-2021-2-TI1-7946100-crimes-ciberneticos-03/tree/dev): versão de desenvolvimento do software

Quanto à gerência de issues, o projeto adota a seguinte convenção para
etiquetas:

- `bugfix`: uma funcionalidade encontra-se com problemas
- `enhancement`: uma funcionalidade precisa ser melhorada
- `feature`: uma nova funcionalidade precisa ser introduzida

> Escolhemos o git para o versionamento e ultilizamos o github para armazenar os repositorios de forma remota.
> Gerenciamos as tags com branchs criadas apartir da branch `dev` em desenvolvimento.
> Issues são criadas apartir da branch de `testing` em teste,
> Ao ser testado o projeto enviamos para a branch `unstable` em Homologação,
> apos isso enviamos para a branch `master` em produção.

## Hospedagem

> Utilizamos o Replit para hospedarmos o nosso [`sistema`](https://safe-buy-check.marcowilly.repl.co).
