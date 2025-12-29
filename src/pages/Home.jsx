import { useState, useEffect } from 'react';
import { booksData } from '../data/books';
import BookCard from '../components/BookCard';

// Styles "Chic" pour la page
const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px'
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
    color: '#2c3e50'
  },
  searchInput: {
    width: '100%',
    maxWidth: '600px',
    display: 'block',
    margin: '0 auto 40px auto',
    padding: '15px 25px',
    fontSize: '1rem',
    borderRadius: '30px',
    border: 'none',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    outline: 'none',
    transition: 'all 0.3s ease'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '30px',
    padding: '20px 0'
  }
};

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(booksData);

  // Logique de Debouncing pour la performance
  useEffect(() => {
    const timer = setTimeout(() => {
      const results = booksData.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBooks(results);
    }, 500); 

    return () => clearTimeout(timer); 
  }, [searchTerm]);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Explorez notre Bibliothèque</h1>
        <p style={{ color: '#7f8c8d' }}>Trouvez votre prochaine lecture parmi nos {booksData.length} ouvrages.</p>
      </div>
      <input 
        type="text" 
        placeholder="Rechercher par titre ou auteur..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.searchInput}
        onFocus={(e) => e.target.style.boxShadow = '0 6px 20px rgba(52, 152, 219, 0.2)'}
        onBlur={(e) => e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)'}
      />

      {/* Grille de livres élégante */}
      <div style={styles.grid}>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))
        ) : (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '50px' }}>
            <p style={{ fontSize: '1.2rem', color: '#95a5a6' }}>😔 Aucun livre ne correspond à votre recherche.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;