# Minha Aplicação

Esta é uma aplicação React criada com Create React App.

## Requisitos

- Node.js (versão 14 ou superior)
- npm (versão 6 ou superior)

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando:

```sh
npm install
```

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`

Inicia o servidor de desenvolvimento.  
Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

A página será recarregada se você fizer edições.  
Você também verá quaisquer erros de lint no console.

### `npm test`

Inicia o executor de testes no modo de observação interativo.  
Veja a seção sobre [executando testes](https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.

### `npm run build`

Compila o aplicativo para produção na pasta `build`.  
Ele agrupa corretamente o React no modo de produção e otimiza a construção para o melhor desempenho.

A compilação é minificada e os nomes dos arquivos incluem os hashes.  
Seu aplicativo está pronto para ser implantado!

Veja a seção sobre [implantação](https://facebook.github.io/create-react-app/docs/deployment) para mais informações.

### `npm run eject`

**Nota: esta é uma operação unilateral. Uma vez que você `eject`, você não pode voltar!**

Se você não estiver satisfeito com a ferramenta de construção e as escolhas de configuração, você pode `eject` a qualquer momento. Este comando removerá a dependência de construção única do seu projeto.

Em vez disso, ele copiará todos os arquivos de configuração e as dependências transitivas (Webpack, Babel, ESLint, etc.) diretamente para o seu projeto para que você tenha controle total sobre eles. Todos os comandos, exceto `eject`, ainda funcionarão, mas eles apontarão para os scripts copiados para que você possa ajustá-los. Neste ponto, você está por conta própria.

## Estrutura do Projeto

- `src/`: Contém o código-fonte da aplicação.
- `public/`: Contém os arquivos públicos que não são processados pelo Webpack.
- `node_modules/`: Contém as dependências do projeto.

## Dependências Principais

- `@babel/core`: ^7.26.7
- `@testing-library/dom`: ^10.4.0
- `@testing-library/jest-dom`: ^6.6.3
- `@testing-library/react`: ^16.2.0
- `cra-template`: 1.2.0
- `react`: ^19.0.0
- `react-dom`: ^19.0.0
- `react-scripts`: 5.0.1
- `web-vitals`: ^4.2.4

## Configuração do ESLint

O projeto está configurado para usar o ESLint com as seguintes extensões:

- `react-app`
- `react-app/jest`

## Browserslist

O projeto está configurado para suportar os seguintes navegadores:

### Produção

- `>0.2%`
- `not dead`
- `not op_mini all`

### Desenvolvimento

- `last 1 chrome version`
- `last 1 firefox version`
- `last 1 safari version`

## Workflow de CI/CD

Este projeto utiliza GitHub Actions para automação de CI/CD. O workflow realiza as seguintes etapas:

1. **Execução dos Testes**: Roda os testes unitários para garantir que o código está funcionando corretamente.
2. **Build da Aplicação**: Compila a aplicação para produção.
3. **Criação de uma Release**: Cria uma nova release no GitHub com os artefatos de build.
4. **Deploy na Vercel**: Faz o deploy da aplicação na Vercel.
