# clone-tabnews

> Projeto em estágio inicial. Esta documentação é mínima e vai evoluir junto com o projeto.

## Setup

Escolha uma das opções abaixo para rodar o projeto.

### Opção 1: Docker

Pré-requisito: Docker e Docker Compose instalados.

```bash
make docker-start
```

Isso sobe o container da aplicação em segundo plano.

> O container roda com o mesmo UID/GID do seu usuário local (via build args definidos em [compose.yml](compose.yml) e [Dockerfile](Dockerfile)), pra evitar que arquivos criados de dentro do container fiquem com dono `root` no host.
>
> Essa configuração só é aplicada quando a imagem é **buildada**. Se você trocar de máquina ou de usuário (UID diferente do que foi usado no último build), rode `make docker-image` para rebuildar a imagem com o UID/GID corretos — `make docker-start` sozinho reaproveita a imagem já existente, mesmo que o UID tenha mudado.

### Opção 2: Local (com nvm)

Pré-requisito: [nvm](https://github.com/nvm-sh/nvm) instalado.

```bash
make nvm-install
```

Isso instala e utiliza a versão do Node definida em [.nvmrc](.nvmrc).
