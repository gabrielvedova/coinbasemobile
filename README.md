# CoinBase

CoinBase é um aplicativo de gerenciamento de despesas pessoais desenvolvido em React Native com Expo. Ele permite que os usuários acompanhem seus gastos, visualizem históricos, filtrem despesas por período e adicionem novos gastos.

## Funcionalidades

- **Home**: Tela inicial que exibe os gastos recentes e permite pesquisar despesas.
- **Histórico de Gastos**: Tela que lista todas as despesas, com opções de filtro por período (hoje, ontem, semana, mês).
- **Adicionar Gasto**: Tela para adicionar novos gastos ao sistema.
- **Detalhes do Gasto**: Tela que exibe informações detalhadas de um gasto selecionado.
- **Relatórios**: Tela para exibir relatórios de gastos (em desenvolvimento).

## Dependências

As principais dependências do projeto estão listadas no arquivo [package.json](package.json). Algumas delas incluem:

- `react-native`: Framework para desenvolvimento mobile.
- `@react-navigation/native`: Biblioteca para navegação.
- `expo`: Ferramenta para desenvolvimento de aplicativos React Native.
- `react-native-vector-icons`: Ícones para a interface do usuário.

## Configuração e Execução

### Pré-requisitos

- Node.js instalado.
- Expo CLI instalado globalmente (`npm install -g expo-cli`).

### Passos para executar o projeto

1.Clone o repositório:

```bash
git clone <url-do-repositorio>
cd CoinBase
```

2.Instale as dependências:

```
npm install
```

3.Inicie o projeto:

```
npm start
```

4.Use o aplicativo Expo Go no seu dispositivo ou um emulador para visualizar o projeto.

### Dados

Os dados das despesas estão armazenados no arquivo Expenses.json. Este arquivo contém uma lista de objetos representando os gastos.

### Navegação

O projeto utiliza a biblioteca react navigation como forma de navegação entre páginas, configuradas nos arquivos StackNavigatior.js e TabNavigator.js.

### Estilo

Os estilos globais e cores estão definidos no arquivo Style.js.
