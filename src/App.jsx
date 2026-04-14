import { useState } from 'react';
import { produtos as dadosIniciais } from './data/produtos';
import ProdutoCard from './components/ProdutoCard';
import './App.css';

function App() {
  // Estado para a lista de produtos
  const [listaProdutos, setListaProdutos] = useState(dadosIniciais);
  
  // Estados para Filtros e Busca (Desafio Extra)
  const [filtroCategoria, setFiltroCategoria] = useState('Todos');
  const [buscaNome, setBuscaNome] = useState('');

  // Estados para o Formulário de Cadastro
  const [novoProd, setNovoProd] = useState({ 
    nome: '', 
    preco: '', 
    categoria: 'Periféricos' 
  });

  // Função para adicionar novo produto
  const adicionarProduto = (e) => {
    e.preventDefault();
    if (!novoProd.nome || !novoProd.preco) return;

    const item = { 
      ...novoProd, 
      id: Date.now(), // Gera ID único baseado no tempo
      preco: parseFloat(novoProd.preco), 
      emPromocao: false 
    };

    setListaProdutos([...listaProdutos, item]);
    
    // Limpa apenas os campos de texto, mantendo a categoria padrão
    setNovoProd({ nome: '', preco: '', categoria: 'Periféricos' });
  };

  // Lógica Combinada de Filtro e Busca
  const produtosExibidos = listaProdutos.filter(p => {
    const condicaoCategoria = filtroCategoria === 'Todos' || p.categoria === filtroCategoria;
    const condicaoNome = p.nome.toLowerCase().includes(buscaNome.toLowerCase());
    return condicaoCategoria && condicaoNome;
  });

  // Cálculo do Total do Inventário (Reduce)
  const precoTotal = produtosExibidos.reduce((total, item) => total + item.preco, 0);

  return (
    <div className="container">
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1>Catálogo de Produtos Pro</h1>
        <p>Atividade Integrada - Unidade 3</p>
      </header>

      {/* Seção do Formulário */}
      <section className="formulario-secao">
        <h3>✨ Cadastrar Novo Item</h3>
        <form onSubmit={adicionarProduto} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <input 
            type="text" 
            placeholder="Nome do produto" 
            value={novoProd.nome} 
            onChange={e => setNovoProd({...novoProd, nome: e.target.value})} 
          />
          <input 
            type="number" 
            placeholder="Preço" 
            value={novoProd.preco} 
            onChange={e => setNovoProd({...novoProd, preco: e.target.value})} 
          />
          <select 
            value={novoProd.categoria} 
            onChange={e => setNovoProd({...novoProd, categoria: e.target.value})}
          >
            <option>Periféricos</option>
            <option>Vídeo</option>
            <option>Áudio</option>
          </select>
          <button type="submit" className="btn-comprar" style={{ backgroundColor: '#27ae60', margin: 0 }}>
            Adicionar
          </button>
        </form>
      </section>

      {/* Seção de Filtros e Busca */}
      <section style={{ marginBottom: '20px', display: 'flex', gap: '15px', alignItems: 'center' }}>
        <input 
          type="text" 
          placeholder="🔍 Buscar por nome..." 
          value={buscaNome}
          onChange={(e) => setBuscaNome(e.target.value)}
          style={{ padding: '8px', flex: 2 }}
        />
        <div style={{ flex: 1 }}>
          <label>Filtrar: </label>
          <select onChange={(e) => setFiltroCategoria(e.target.value)} style={{ padding: '8px' }}>
            <option value="Todos">Todas as Categorias</option>
            <option value="Periféricos">Periféricos</option>
            <option value="Vídeo">Vídeo</option>
            <option value="Áudio">Áudio</option>
          </select>
        </div>
      </section>

      {/* Grid de Produtos */}
      <div className="produto-grid">
        {produtosExibidos.length > 0 ? (
          produtosExibidos.map(prod => (
            <ProdutoCard 
              key={prod.id} 
              nome={prod.nome} 
              preco={prod.preco} 
              categoria={prod.categoria}
              emPromocao={prod.emPromocao}
            >
              {/* Uso do CHILDREN conforme solicitado na atividade */}
              <button className="btn-comprar">Comprar agora</button>
            </ProdutoCard>
          ))
        ) : (
          <p style={{ gridColumn: '1/-1', textAlign: 'center', color: '#888' }}>
            Nenhum produto encontrado.
          </p>
        )}
      </div>

      <footer style={{ marginTop: '40px', textAlign: 'right', borderTop: '2px solid #ddd', padding: '20px' }}>
        <h2 style={{ color: '#2c3e50' }}>
          Total em exibição: R$ {precoTotal.toFixed(2)}
        </h2>
      </footer>
    </div>
  );
}

export default App;