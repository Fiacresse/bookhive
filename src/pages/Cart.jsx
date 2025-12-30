import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, dispatch } = useCart();
  
  const total = cart.reduce((sum, book) => sum + book.price, 0);

  if (cart.length === 0) {
    return (
      <div style={styles.emptyContainer}>
        <div style={{ fontSize: '5rem' }}>🛒</div>
        <h2>Votre panier est vide</h2>
        <p style={{ color: '#7f8c8d', marginBottom: '20px' }}>Il semble que vous n'ayez pas encore ajouté de livres.</p>
        <Link to="/" style={styles.continueButton}>Découvrir nos livres</Link>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.mainTitle}>Mon Panier ({cart.length})</h1>
      
      <div style={styles.cartContent}>
        {/* Liste des articles */}
        <div style={styles.itemsList}>
          {cart.map(item => (
            <div key={item.id} style={styles.cartItem}>
              <img src={item.coverImage} alt={item.title} style={styles.itemImage} />
              
              <div style={styles.itemDetails}>
                <h3 style={styles.itemTitle}>{item.title}</h3>
                <p style={styles.itemAuthor}>{item.author}</p>
                <button 
                  onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}
                  style={styles.removeLink}
                >
                  Supprimer
                </button>
              </div>

              <div style={styles.itemPrice}>
                {item.price.toFixed(2)} €
              </div>
            </div>
          ))}
        </div>

        {/* Résumé de la commande */}
        <div style={styles.summaryCard}>
          <h2 style={styles.summaryTitle}>Résumé</h2>
          <div style={styles.summaryRow}>
            <span>Sous-total</span>
            <span>{total.toFixed(2)} €</span>
          </div>
          <div style={styles.summaryRow}>
            <span>Livraison</span>
            <span style={{ color: '#27ae60', fontWeight: 'bold' }}>Gratuit</span>
          </div>
          <hr style={styles.divider} />
          <div style={{ ...styles.summaryRow, fontSize: '1.2rem', fontWeight: 'bold' }}>
            <span>Total</span>
            <span>{total.toFixed(2)} €</span>
          </div>
          <button 
            style={styles.checkoutButton}
            onClick={() => alert("Passage à la caisse... (Simulation)")}
          >
            Passer la commande
          </button>
          <Link to="/" style={styles.backToStore}>Continuer mes achats</Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '40px auto',
    padding: '0 20px',
    fontFamily: "'Segoe UI', Roboto, sans-serif",
  },
  mainTitle: {
    fontSize: '2rem',
    color: '#2c3e50',
    marginBottom: '30px',
    borderBottom: '2px solid #f1f1f1',
    paddingBottom: '15px'
  },
  cartContent: {
    display: 'flex',
    gap: '40px',
    flexWrap: 'wrap',
  },
  itemsList: {
    flex: '2',
    minWidth: '350px',
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    marginBottom: '15px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    transition: 'transform 0.2s',
  },
  itemImage: {
    width: '80px',
    height: '110px',
    objectFit: 'cover',
    borderRadius: '6px',
    marginRight: '20px',
  },
  itemDetails: {
    flex: '1',
  },
  itemTitle: {
    margin: '0 0 5px 0',
    fontSize: '1.1rem',
    color: '#2c3e50',
  },
  itemAuthor: {
    margin: '0 0 10px 0',
    color: '#7f8c8d',
    fontSize: '0.9rem',
  },
  removeLink: {
    background: 'none',
    border: 'none',
    color: '#e74c3c',
    cursor: 'pointer',
    fontSize: '0.85rem',
    padding: '0',
    textDecoration: 'underline',
  },
  itemPrice: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  summaryCard: {
    flex: '1',
    minWidth: '300px',
    backgroundColor: '#f9f9f9',
    padding: '30px',
    borderRadius: '15px',
    height: 'fit-content',
    position: 'sticky',
    top: '20px',
  },
  summaryTitle: {
    margin: '0 0 20px 0',
    fontSize: '1.4rem',
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
    color: '#34495e',
  },
  divider: {
    border: 'none',
    borderTop: '1px solid #ddd',
    margin: '20px 0',
  },
  checkoutButton: {
    width: '100%',
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '15px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginBottom: '15px',
    transition: 'background 0.3s',
  },
  backToStore: {
    display: 'block',
    textAlign: 'center',
    color: '#3498db',
    textDecoration: 'none',
    fontSize: '0.9rem',
  },
  emptyContainer: {
    textAlign: 'center',
    padding: '80px 20px',
  },
  continueButton: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '12px 25px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
  }
};

export default Cart;