. Criar o projeto com o next-app
  yarn create next-app react-setup

. Adicionar typescript, @types node e react
  yarn -D add typescript @types/react @types/node

. Adicionar eslint
  yarn -D add eslint
  yarn eslint --init
    > To check syntax, find problems, and enforce code style.
    > JavasScript modules (import/ export)
    > React
    > Yes
    > browser, node (selecionar ambos)
    > Use a popular style guide > airbnb
    > JSON
    > Yes > package-lock.json > executar comando: yarn

. Adicionar prettier
  yarn -D add prettier eslint-plugin-prettier eslint-config-prettier
    > Configurar arquivo: .eslintrc.json
    > Adicionar arquivo: .eslintignore
    > Adicionar arquivo: prettier.config.js

. Adicionar editorconfig

. Adicionar styled-components
  yarn -D add @types/styled-components
    > Adicionar arquivo: babel.config.js

. Adicionar next-images
  yarn add next-images
    > Adicionar arquivo: next.config.js

. Adicionar babel-plugin-inline-react-svg
    > Adicionar aos plugins do babel: babel.config.js

