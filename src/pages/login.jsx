import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('client');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, role });
    navigate('/');
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.loginCard}>
        <div style={styles.header}>
          <h2 style={styles.title}>Bienvenue sur BookHive</h2>
          <p style={styles.subtitle}>Connectez-vous pour accéder à votre bibliothèque</p>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Adresse Email</label>
            <input
              type="email"
              placeholder="votre@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Type de compte</label>
            <select 
              value={role} 
              onChange={(e) => setRole(e.target.value)}
              style={styles.select}
            >
              <option value="client">Client</option>
              <option value="admin">Administrateur</option>
            </select>
          </div>

          <button type="submit" style={styles.button}>
            Se connecter
          </button>
        </form>
        
        <p style={styles.footerText}>
          Accès invité : n'importe quel email fonctionne pour la démo.
        </p>
      </div>
    </div>
  );
}

// Objets de styles Chic
const styles = {
  pageWrapper: {
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'transparent', // On garde le fond gris bleuté qu'on a mis sur le body
  },
  loginCard: {
    background: 'white',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  header: {
    marginBottom: '30px',
  },
  title: {
    margin: '0 0 10px 0',
    color: '#2c3e50',
    fontSize: '1.8rem',
  },
  subtitle: {
    color: '#7f8c8d',
    fontSize: '0.9rem',
  },
  form: {
    textAlign: 'left',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '600',
    color: '#34495e',
    fontSize: '0.9rem',
  },
  input: {
    width: '100%',
    padding: '12px 15px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    boxSizing: 'border-box',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  select: {
    width: '100%',
    padding: '12px 15px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    background: 'white',
    cursor: 'pointer',
  },
  button: {
    width: '100%',
    padding: '14px',
    background: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background 0.3s',
    marginTop: '10px',
  },
  footerText: {
    marginTop: '25px',
    fontSize: '0.8rem',
    color: '#bdc3c7',
  }
};

export default Login;