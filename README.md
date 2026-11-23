# Componentes reutilizáveis com Vite + React

Atividade de Desenvolvimento para Web (CEUMA).

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (normalmente `http://localhost:5173`). Para gerar a versão de produção: `npm run build`.

## Estrutura

- `src/components/Header.jsx` — cabeçalho da página.
- `src/components/Card.jsx` — cartão reutilizável que recebe a prop `numero`.
- `src/App.jsx` — renderiza um `Header` e três `Card` com `numero={1}`, `numero={2}` e `numero={3}`.

## Como o Card recebe a prop

No `App`, cada cartão é chamado como `<Card numero={1} />`. O React junta os atributos em um objeto `props` (`{ numero: 1 }`) e o passa para a função `Card`. Com a desestruturação `function Card({ numero })`, o valor fica disponível direto na variável `numero`, que é exibida com `{numero}` no JSX. Como é o mesmo componente, só o valor da prop muda entre os três cartões.
