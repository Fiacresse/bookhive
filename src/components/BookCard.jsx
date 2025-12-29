import { Link } from 'react-router-dom';

function BookCard({ book }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
      <img src={book.coverImage} alt={book.title} style={{ width: '100px', height: '150px', objectFit: 'cover' }} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      
      {/* On entoure le bouton avec un Link */}
      <Link to={`/book/${book.id}`}>
        <button style={{ cursor: 'pointer', padding: '5px 10px' }}>Voir détails</button>
      </Link>
    </div>
  );
}

export default BookCard;