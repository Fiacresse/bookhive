import { booksData } from '../data/books';
import { useAuth } from '../context/AuthContext';

function Admin() {
  const { user } = useAuth();

  // Vérification du rôle au chargement de la page
  if (!user || user.role !== 'admin') {
    return (
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <h2 style={{ color: '#e74c3c' }}> Accès Refusé</h2>
        <p>Cette zone est réservée aux administrateurs de BookHive.</p>
        <button 
          onClick={() => window.location.href = '/'} 
          style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}
        >
          Retour à l'accueil
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1000px', margin: '40px auto', padding: '0 20px' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '30px',
        borderBottom: '2px solid #2c3e50',
        paddingBottom: '15px'
      }}>
        <div>
          <h1 style={{ margin: 0, color: '#2c3e50' }}>Dashboard Gestion</h1>
          <p style={{ margin: '5px 0 0', color: '#7f8c8d' }}>Connecté en tant que : <strong>{user.email}</strong></p>
        </div>
        <span style={{ 
          background: '#f1c40f', 
          color: '#2c3e50', 
          padding: '8px 15px', 
          borderRadius: '20px', 
          fontWeight: 'bold',
          fontSize: '0.9rem'
        }}>
          Mode Administrateur 
        </span>
      </div>

      <div style={{ 
        background: 'white', 
        borderRadius: '12px', 
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)', 
        overflow: 'hidden' 
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#34495e', color: 'white', textAlign: 'left' }}>
              <th style={{ padding: '15px' }}>ID</th>
              <th style={{ padding: '15px' }}>Informations du Livre</th>
              <th style={{ padding: '15px' }}>État du Stock</th>
              <th style={{ padding: '15px', textAlign: 'center' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {booksData.map((book) => (
              <tr key={book.id} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '15px', color: '#95a5a6' }}>#{book.id}</td>
                <td style={{ padding: '15px' }}>
                  <div style={{ fontWeight: 'bold', color: '#2c3e50' }}>{book.title}</div>
                  <div style={{ fontSize: '0.85rem', color: '#7f8c8d' }}>{book.author}</div>
                </td>
                <td style={{ padding: '15px' }}>
                  <span style={{ 
                    padding: '4px 10px', 
                    borderRadius: '12px', 
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    background: book.stock > 5 ? '#eafaf1' : '#fdedec',
                    color: book.stock > 5 ? '#27ae60' : '#e74c3c',
                    border: `1px solid ${book.stock > 5 ? '#27ae60' : '#e74c3c'}`
                  }}>
                    {book.stock} exemplaires
                  </span>
                </td>
                <td style={{ padding: '15px', textAlign: 'center' }}>
                  <button 
                    onClick={() => alert(`Suppression de "${book.title}" (Simulée)`)}
                    style={{ 
                      background: 'none', 
                      border: '1px solid #e74c3c', 
                      color: '#e74c3c', 
                      padding: '5px 12px', 
                      borderRadius: '5px', 
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                    onMouseOver={(e) => e.target.style.background = '#fdedec'}
                    onMouseOut={(e) => e.target.style.background = 'none'}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;