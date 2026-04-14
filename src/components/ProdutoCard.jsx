const ProdutoCard = ({ nome, preco, categoria, emPromocao }) => {
  // Objeto de estilo para o Card
  const cardStyle = {
    border: '2px solid #ddd',
    borderRadius: '12px',
    padding: '20px',
    margin: '15px',
    width: '220px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: emPromocao ? '#fff3cd' : '#fff', // Amarelo claro se for promoção
    transition: 'transform 0.2s'
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ color: '#333' }}>{nome}</h3>
      <p style={{ color: '#666', fontSize: '14px' }}>📁 {categoria}</p>
      <p style={{ fontWeight: 'bold', fontSize: '18px' }}>
        R$ {preco.toFixed(2)}
      </p>
      
      {/* Condicional JSX (Operador Ternário) solicitado na atividade */}
      {emPromocao ? (
        <span style={{ 
          display: 'block', 
          marginTop: '10px', 
          color: '#d9534f', 
          fontWeight: 'bold',
          fontSize: '12px',
          textTransform: 'uppercase'
        }}>
          🔥 Oferta Especial!
        </span>
      ) : (
        <span style={{ color: '#999', fontSize: '12px' }}>Preço Regular</span>
      )}
    </div>
  );
};

export default ProdutoCard;