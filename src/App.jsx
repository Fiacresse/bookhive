import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Admin from './pages/Admin';
import { useAuth } from './context/AuthContext';
import { useCart } from './context/CartContext';

function Header() {
  const { user, logout } = useAuth();
  const { cart } = useCart();

  return (
    <header style={{ 
      padding: '1rem 2rem', 
      background: '#1a252f', 
      color: 'white', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
    }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold' }}>
        BookHive 
      </Link>
      
      <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>
          Panier ({cart?.length || 0})
        </Link>
        {user?.role === 'admin' && (
          <Link to="/admin" style={{ color: '#f1c40f', textDecoration: 'none', fontWeight: 'bold' }}>
            Panel Admin
          </Link>
        )}
        
        {user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '0.9rem', color: '#bdc3c7' }}>
              {user.email || 'Utilisateur'}
            </span>
            <button 
              onClick={logout} 
              style={{ background: '#e74c3c', color: 'white', border: 'none', padding: '8px 15px', borderRadius: '4px', cursor: 'pointer' }}
            >
              Déconnexion
            </button>
          </div>
        ) : (
          <Link to="/login" style={{ color: 'white', textDecoration: 'none', background: '#3498db', padding: '8px 15px', borderRadius: '4px' }}>
            Connexion
          </Link>
        )}
      </nav>
    </header>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<div style={{ padding: '50px', textAlign: 'center' }}><h1>404 - Page non trouvée</h1><Link to="/">Retour à l'accueil</Link></div>} />
        </Routes>
      </main>
      <footer style={{ textAlign: 'center', padding: '20px', background: '#f8f9fa', marginTop: '50px' }}>
        <p>&copy; 2025 BookHive</p>
      </footer>
    </Router>
  );
}

export default App;