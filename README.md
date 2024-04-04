# UnifiedAPI

## Objetivo
O objetivo principal do projeto é fornecer uma solução flexível e adaptável para acessar e exibir informações sobre os personagens do Rick and Morty de várias fontes de dados, como APIs do Brasil e dos Estados Unidos.

## Características
- Adaptabilidade: Utilização do padrão de design Adapter para proporcionar uma interface comum para acessar diferentes integrações de API, permitindo que o sistema se adapte facilmente a novas fontes de dados ou integrações.
- Uso de Adaptadores: Implementa adaptadores para integrar e buscar dados de personagens do Rick and Morty de fontes em JSON e XML de diferentes países.
- Exibição Estruturada de Dados: Após a busca dos personagens, os resultados são apresentados de forma estruturada e organizada em uma tabela, facilitando a compreensão e análise das informações pelos usuários.

## Instalação

1. Clone o repositório:

```bash
   git clone https://github.com/RXGabriel/UnifiedAPI.git
   cd UnifiedAPI
```

2. Instale as dependências:

```bash
npm install
```

## Uso
Para iniciar o UnifiedAPI, execute os seguintes comandos:

 iniciar o servidor:
```bash
  npm run start
```
rodar os testes:
```bash
npm run test
```
gerar relatório de cobertura de teste:
```bash
npm run cov
```