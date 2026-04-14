import { useState } from 'react'; // Importamos o useState
import { produtos as dadosIniciais } from './data/produtos';
import ProdutoCard from './components/ProdutoCard';

function App() {
  // Criamos o estado com a lista inicial de produtos
  const [listaProdutos, setListaProdutos] = useState(dadosIniciais);
  
  // Estados para o formulário
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');

  const adicionarProduto = (e) => {
    e.preventDefault(); // Impede a página de recarregar
    
    if (!nome || !preco) return;

    const novoProduto = {
      id: Math.random(), // Gera um ID temporário
      nome: nome,
      preco: parseFloat(preco),
      categoria: "Geral",
      emPromocao: false
    };

    setListaProdutos([...listaProdutos, novoProduto]); // Adiciona à lista
    setNome(''); // Limpa os campos
    setPreco('');
  };

  const precoTotal = listaProdutos.reduce((total, item) => total + item.preco, 0);

  return (
    <div style={{ padding: '40px', backgroundColor: '#f4f7f6', minHeight: '100vh' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#2c3e50', fontSize: '2.5rem' }}>Meu Catálogo de Produtos</h1>
      </header>

      {/* Formulário do Desafio Extra */}
      <section style={{ 
        maxWidth: '500px', 
        margin: '0 auto 40px', 
        padding: '20px', 
        backgroundColor: '#fff', 
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <h3>Cadastrar Novo Produto</h3>
        <form onSubmit={adicionarProduto} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input 
            type="text" 
            placeholder="Nome do produto" 
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            style={{ padding: '8px' }}
          />
          <input 
            type="number" 
            placeholder="Preço" 
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            style={{ padding: '8px' }}
          />
          <button type="submit" style={{ 
            padding: '10px', 
            backgroundColor: '#27ae60', 
            color: 'white', 
            border: 'none', 
            cursor: 'pointer',
            fontWeight: 'bold' 
          }}>
            Adicionar ao Catálogo
          </button>
        </form>
      </section>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
        {listaProdutos.map((produto) => (
          <ProdutoCard 
            key={produto.id}
            nome={produto.nome}
            preco={produto.preco}
            categoria={produto.categoria}
            emPromocao={produto.emPromocao}
          />
        ))}
      </div>

      <footer style={{ marginTop: '50px', textAlign: 'center', padding: '20px', borderTop: '2px solid #eee' }}>
        <h2 style={{ color: '#27ae60' }}>
          Valor Total do Carrinho: R$ {precoTotal.toFixed(2)}
        </h2>
      </footer>
    </div>
  );
}

export default App;