# Clone Tabnews

- A fundação:

  - Começamos criando um repositório GitHub.
  - Neste repositório criamos um Codespaces.
  - Igualamos a versão do node utilizando `nvm`.
  - `nvm` significa Node Version Manager.
  - Em [pesquisa no chatGPT](https://chatgpt.com/share/6853592f-8c1c-8003-8c3b-cc8d62616bfd) descobri que `node.js` é simplesmente um motor para rodar Javascript fora do navegador.
  - `nvm ls` (de listar) me mostra as versões atuais disponíveis do node.
  - Sugestão de utilizar a versão `lts/hydrogen` (v18.20.8).
  - Se por algum motivo a instalação desta versão não desse certo isntalar instalar a próxima lts que seria a `lts/iron`, mas não foi necessário.
  - Versões mais atuais da mesma lts tem compatibilidade umas com as outras.
  - Quando desligar este Codespaces a versão anterior irá retornar e o comando `nvm alias default lts/hydrogen` resolveu o problema. Tudo indica que este comando `nvm alias default <versao>` parace configurar a versão globalmente. Como esta máquina não rodará mais nenhum projeto, acredito que não será um problema, mas para um ambiente local (minha máquina, por exemplo), acredito ser bom descobrir o comando equivalente que mudará somente o local.
  - Sempre usar a flag `--help` para descobrir como os comandos funcionam.
  - Para "documentar" no projeto o que estamos fazendo é bom criar o arquivo `.nvmrc`. O `rc` aqui no final significa run commands, e podemos encontrar este sufixo em vários outros lugares como em `bashrc`. Isso é uma convemção criada para arquivos que possuem instruções para inicialização.
  - Arquivo `.nvmrc` precisa de uma linha em branco no final. Após a definição da versão `lts/hydrogen`. Com este arquivo bastará rodar `nvm` install e ele fará toda mágica de instalação para nós. Não sei se o Python tem este tipo de mágica.

- A primeira parede:
  - Usando `next.js`, que turbina o `react` como se permitindo rodar a parte de backend do sistema. Veja a resposa [chatGPT].
  - `next.js` possibilita uma das melhoras integrações Framework / Web Host. Colocar um site no ar (back e front) com esta ferramenta nunca foi tão fácil.
  - `next.js` é desenvolvido pela vercel.com, o que faz o combo `next.js` + vercel muito bom.
  - Criamos o arquivo `package.json` que Felipe classificou como arquivo Manifesto, ou responsável por listar as dependências do projeto.
  - `package.json` é ótimo para permitir que teremos as mesmas versões ao replicar o sistema (no servidor de produção, por exemplo).
  - Para iniciar a criação deste arquivo basta rodar `npm init`.
  - Para instalar pacotes basta `npm install package-name@version`, como em `npm install next@13.1.6`.
  - Instala `react` e `react-dom` ambos na versão `18.2.0`. O `react-dom` é um renderizador para páginas HTML. Estes renderizadores foram dividios para facilitar o trabalho um deles, por exemplo é o react-native.
  - Só com estas 3 dependências dá para fazer muita coisa legal. Oque? Posso pensar em exemplos para escrever posts e praticar.
  - Estamos instalando as mesmas versões para evitar erros neste momento, mas no futuro os testes automatizados vão deixar a atualização de versão sempre em dia.
