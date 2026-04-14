# 📦 Catálogo de Produtos Pro - Unidade 3

Esta é a versão evoluída do Catálogo de Produtos, desenvolvida para a **Atividade Integrada da Unidade 3**. O projeto foca em componentização avançada, gerenciamento de estados complexos e interatividade.

## 🚀 Novas Funcionalidades (Unidade 3)
- **Componentização Avançada:** O `ProdutoCard` agora utiliza a prop `children`, permitindo a inserção de elementos extras (como botões) de forma flexível.
- **Layout Responsivo (Grid):** Implementação de **CSS Grid** para que os produtos se organizem automaticamente em diferentes tamanhos de tela.
- **Sistema de Filtros:** Seletor de categorias dinâmico que filtra os produtos em tempo real.
- **Busca em Tempo Real:** Barra de busca que filtra produtos por nome enquanto o usuário digita.
- **Persistência de Estado:** Uso intensivo de `useState` para manter a sincronia entre formulário, lista e filtros.
- **Cálculo Dinâmico:** O valor total do inventário se ajusta automaticamente com base nos produtos exibidos na tela (usando `reduce`).

## 🛠️ Tecnologias Utilizadas
- **React 18**
- **Vite** (Build Tool)
- **JavaScript (ES6+)**
- **CSS3 (Grid & Flexbox)**

## 🔧 Como Executar o Projeto
1. Clone este repositório.
2. No terminal, acesse a pasta do projeto: `cd catalogo-produtos`
3. Instale as dependências: `npm install`
4. Inicie o servidor de desenvolvimento: `npm run dev`
5. Acesse no navegador: `http://localhost:5173`

---
Desenvolvido por **Jaciana Regina** como parte do curso de Análise e Desenvolvimento de Sistemas.