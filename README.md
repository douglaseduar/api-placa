# API PLACA 🚗

## Apresentação:

Está biblioteca é uma Api Wrapper simples para buscar dados de veículos a partir da placa, para isso é utilizado os dados fornecidos do site [Tabela Fipe Brasil](www.tabelafipebrasil.com).  Ela também verifica se o valor pesquisada realmente é uma placa válida.

## Uso

### - Instalação

```
npm install api-placa --save
```

### - Adicionar Importações
```
const {pesquisa_placa} = require("api-placa")
```

### - Exemplo
```
pesquisa_placa(placa)

{
  marca: 'Fiat',
  modelo: 'STRADA FIRE FLEX',
  AnoModelo: '2011',
  cor: 'Branca',
  cilindradas: '1400 cc',
  potencia: '86 cv',
  Combustivel: 'Álcool / Gasolina'
}
```


###  - Recursos ausentes

* O tratamento de erros e exceções quase não está presente, deve ser melhorado