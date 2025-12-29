import { Link } from 'react-router-dom';

function BookCard({ book }) {
  const cardStyle = {
    background: 'white',
    borderRadius: '15px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    cursor: 'default'
  };

  const imageStyle = {
    width: '100%',
    height: '220px',
    objectFit: 'cover',
    borderRadius: '10px',
    marginBottom: '15px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  };

  const buttonStyle = {
    background: '#3498db',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '25px',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%',
    marginTop: '10px',
    transition: 'background 0.3s ease'
  };

  return (
    <div 
      style={cardStyle}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-10px)';
        e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.12)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)';
      }}
    >
      <div>
        <img src={book.coverImage} alt={book.title} style={imageStyle} />
        <h3 style={{ fontSize: '1.1rem', margin: '10px 0 5px', color: '#2c3e50' }}>{book.title}</h3>
        <p style={{ color: '#7f8c8d', fontSize: '0.9rem', marginBottom: '15px' }}>{book.author}</p>
      </div>
      
      <div style={{ marginTop: 'auto' }}>
        <p style={{ fontWeight: 'bold', color: '#27ae60', marginBottom: '10px' }}>{book.price} €</p>
        <Link to={`/book/${book.id}`} style={{ textDecoration: 'none' }}>
          <button 
            style={buttonStyle}
            onMouseOver={(e) => e.target.style.background = '#2980b9'}
            onMouseOut={(e) => e.target.style.background = '#3498db'}
          >
            Découvrir
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BookCard;