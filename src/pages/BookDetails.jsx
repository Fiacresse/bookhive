import { useParams, useNavigate } from 'react-router-dom';
import { booksData } from '../data/books';
import { useCart } from '../context/CartContext';

function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useCart();

  const book = booksData.find(b => b.id === parseInt(id));

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: book });
    // Une petite notification plus élégante qu'un alert serait mieux, 
    // mais gardons l'alert pour la logique actuelle.
    alert(`"${book.title}" a été ajouté à votre panier !`);
  };

  if (!book) return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Livre introuvable</h2>;

  return (
    <div style={styles.container}>
      {/* Bouton Retour stylisé */}
      <button onClick={() => navigate(-1)} style={styles.backButton}>
        <span style={{ marginRight: '8px' }}>←</span> Retour au catalogue
      </button>

      <div style={styles.card}>
        {/* Section Image avec effet d'ombre */}
        <div style={styles.imageSection}>
          <img src={book.coverImage} alt={book.title} style={styles.image} />
        </div>

        {/* Section Informations */}
        <div style={styles.infoSection}>
          <div style={styles.header}>
            <span style={styles.categoryBadge}>{book.category}</span>
            <h1 style={styles.title}>{book.title}</h1>
            <p style={styles.author}>par <span style={styles.authorName}>{book.author}</span></p>
          </div>

          <div style={styles.ratingSection}>
            <span style={styles.stars}>{"⭐".repeat(Math.floor(book.rating))}</span>
            <span style={styles.ratingText}>{book.rating}/5</span>
          </div>

          <div style={styles.priceTag}>{book.price.toFixed(2)} €</div>

          <div style={styles.detailsGrid}>
            <p style={styles.detailItem}><strong>ISBN:</strong> {book.isbn}</p>
            <p style={styles.detailItem}><strong>Format:</strong> Relié / Broché</p>
          </div>

          <div style={styles.descriptionContainer}>
            <h3 style={styles.sectionTitle}>Résumé</h3>
            <p style={styles.descriptionText}>{book.description}</p>
          </div>

          <button 
            onClick={handleAddToCart} 
            style={styles.addButton}
            onMouseOver={(e) => e.target.style.backgroundColor = '#219150'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#27ae60'}
          >
            🛒 Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}

// Objet de styles "Chic & Clean"
const styles = {
  container: {
    maxWidth: '1100px',
    margin: '40px auto',
    padding: '0 20px',
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    color: '#2c3e50',
  },
  backButton: {
    background: 'none',
    border: 'none',
    color: '#7f8c8d',
    fontSize: '1rem',
    cursor: 'pointer',
    marginBottom: '25px',
    padding: '8px 0',
    display: 'flex',
    alignItems: 'center',
    transition: 'color 0.2s',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: '15px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
    overflow: 'hidden',
    gap: '40px',
    padding: '40px',
    flexWrap: 'wrap', // Responsive pour mobiles
  },
  imageSection: {
    flex: '1',
    minWidth: '300px',
  },
  image: {
    width: '100%',
    maxWidth: '380px',
    borderRadius: '8px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.15)',
    display: 'block',
    margin: '0 auto',
  },
  infoSection: {
    flex: '1.5',
    minWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
  },
  categoryBadge: {
    backgroundColor: '#ebf5fb',
    color: '#3498db',
    padding: '5px 12px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  title: {
    fontSize: '2.5rem',
    margin: '15px 0 5px 0',
    color: '#2c3e50',
    lineHeight: '1.2',
  },
  author: {
    fontSize: '1.1rem',
    color: '#95a5a6',
    marginBottom: '20px',
  },
  authorName: {
    color: '#34495e',
    fontWeight: '600',
  },
  ratingSection: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  stars: {
    fontSize: '1.2rem',
  },
  ratingText: {
    marginLeft: '10px',
    color: '#7f8c8d',
    fontSize: '0.9rem',
  },
  priceTag: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '25px',
  },
  detailsGrid: {
    borderTop: '1px solid #eee',
    borderBottom: '1px solid #eee',
    padding: '15px 0',
    marginBottom: '25px',
  },
  detailItem: {
    margin: '5px 0',
    fontSize: '0.95rem',
    color: '#34495e',
  },
  sectionTitle: {
    fontSize: '1.2rem',
    marginBottom: '10px',
    color: '#2c3e50',
  },
  descriptionText: {
    lineHeight: '1.6',
    color: '#5d6d7e',
    marginBottom: '30px',
  },
  addButton: {
    backgroundColor: '#27ae60',
    color: 'white',
    padding: '15px 30px',
    fontSize: '1.1rem',
    fontWeight: '600',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 14px rgba(39, 174, 96, 0.3)',
    marginTop: 'auto', // Pousse le bouton vers le bas
  }
};

export default BookDetails;