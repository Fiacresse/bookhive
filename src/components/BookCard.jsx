function BookCard({ book }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
      <img src={book.coverImage} alt={book.title} style={{ width: '100px', height: '150px' }} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p><strong>{book.price} €</strong></p>
      <button>Voir détails</button>
    </div>
  );
}
export default BookCard;