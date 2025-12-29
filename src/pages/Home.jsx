import { useState, useEffect } from 'react';
import { booksData } from '../data/books';
import BookCard from '../components/BookCard';

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(booksData);

  // Logique de Debouncing
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
    <div style={{ padding: '20px' }}>
      <h1>Catalogue</h1>
      
      {/*  concernat la barre de recherche */}
      <input 
        type="text" 
        placeholder="Rechercher un livre ou un auteur..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #ccc' }}
      />

      {/*  concernant la Grille de livres */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))
        ) : (
          <p>Aucun livre trouvé.</p>
        )}
      </div>
    </div>
  );
}

export default Home;