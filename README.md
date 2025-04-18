# Estudos em JavaScript 📚

Este repositório contém códigos voltados para meu portfólio e estudos em **JavaScript**, focando nos primeiros passos com a linguagem e sua sintaxe. A ideia é que este conteúdo sirva tanto como um **memorial de aprendizado**, quanto como **material de apoio** para aulas.
---

##  Conceitos Abordados

###  Tipos de Dados

- **Null**: É, intencionalmente, um valor "vazio"/"inexistente".
- **Undefined**: Valor padrão de variáveis declaradas mas não inicializadas.
- **Boolean**: Tipo lógico --> `true` ou `false`.
- **Number**: Tipo numérico para inteiros e decimais.
- **BigInt**: Representa números inteiros muito grandes, além do limite de segurança dos números padrão (`Number.MAX_SAFE_INTEGER`).
- **String**: Sequência de caracteres p/ representar texto.
- **Symbol**: Tipo único e imutável usado como identificador exclusivo de propriedades de objetos.

📖 [Referência MDN sobre tipos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types)

---

###  Operadores Aritméticos

- **Soma (`+`)**
- **Subtração (`-`)**
- **Multiplicação (`*`)**
- **Divisão (`/`)**

---

###  Palavras Reservadas

Palavras que têm significados especiais na linguagem e **não podem ser usadas como nomes de variáveis ou funções**, como:

- `var`, `let`, `const`
- `function`, `return`
- `if`, `else`, `switch`
- `for`, `while`, `do`, `break`, `continue`
- `class`, `try`, `catch`, `throw`, `import`, `export`, entre outras.

---

### 🔁 Estruturas de Controle e Repetição

- **Condicionais**: Controlar fluxo com base em condições.
  - `if` / `else`: Executa blocos diferentes dependendo do resultado de uma expressão.
  - `switch`: Seleciona entre vários blocos com base em um valor. Muito utilizado para situações de "Menu", dependendo do 'caso'.

- **Laços de repetição (iteração)**:
  - `for`: Repete um bloco com controle baseado em índice.
  - `forEach`: Executa uma função para cada item de um array.
  - `while`: Executa enquanto a condição for verdadeira.
  - `do...while`: Executa pelo menos uma vez antes de verificar a condição.

---

### ⚙ Funções Nativas (Built-in) --> ler documentação do MDN

Funções já incluídas na linguagem, prontas para uso:

- `alert()`: Mostra uma janela de alerta no navegador.
- `console.log()`: Exibe mensagens no console (útil para debug). É o cw + Tab + Tab do .Net
- `parseInt()`, `parseFloat()`: Convertem strings para números.
- `typeof`: Retorna o tipo de uma variável.
- `isNaN()`: Verifica se um valor **não é um número**.

---

Sinta-se à vontade para explorar os arquivos, testar os códigos e contribuir com ideias ou melhorias!
