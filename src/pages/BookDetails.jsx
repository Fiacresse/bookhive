import { useParams, useNavigate } from 'react-router-dom';
import { booksData } from '../data/books';

function BookDetails() {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const navigate = useNavigate();

  // On cherche le livre correspondant à l'ID
  const book = booksData.find(b => b.id === parseInt(id));

  if (!book) return <h2>Livre introuvable</h2>;

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={() => navigate(-1)}>⬅ Retour</button>
      
      <div style={{ display: 'flex', gap: '30px', marginTop: '20px' }}>
        <img src={book.coverImage} alt={book.title} style={{ width: '300px', borderRadius: '10px' }} />
        
        <div>
          <h1>{book.title}</h1>
          <p><strong>Auteur :</strong> {book.author}</p>
          <p><strong>Catégorie :</strong> {book.category}</p>
          <p><strong>ISBN :</strong> {book.isbn}</p>
          <p><strong>Prix :</strong> {book.price} €</p>
          <p><strong>Note :</strong> ⭐ {book.rating}/5</p>
          <hr />
          <h3>Description</h3>
          <p>{book.description}</p>
          <button style={{ padding: '10px 20px', background: '#27ae60', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;