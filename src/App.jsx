import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <header style={{ padding: '1rem', background: '#2c3e50', color: 'white' }}>
        <nav>
          <strong style={{ fontSize: '1.5rem' }}>BookHive 📚</strong>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<div><h1>404 - Page non trouvée</h1></div>} />
      </Routes>
    </Router>
  );
}

export default App;