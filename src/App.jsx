import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import Login from './pages/login';
import { useAuth } from './context/AuthContext';

function Header() {
  const { user, logout } = useAuth();
  return (
    <header style={{ padding: '1rem', background: '#2c3e50', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.5rem' }}>BookHive 📚</Link>
      <nav>
        {user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span>Bienvenue, <strong>{user.email}</strong> ({user.role})</span>
            <button onClick={logout} style={{ background: '#e74c3c', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer' }}>Déconnexion</button>
          </div>
        ) : (
          <Link to="/login" style={{ color: 'white' }}>Se connecter</Link>
        )}
      </nav>
    </header>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;