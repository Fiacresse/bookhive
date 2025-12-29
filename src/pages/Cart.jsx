import { useCart } from '../context/CartContext';

function Cart() {
  const { cart, dispatch } = useCart();
  
  const total = cart.reduce((sum, book) => sum + book.price, 0);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Mon Panier</h1>
      {cart.length === 0 ? <p>Le panier est vide</p> : (
        <>
          {cart.map(item => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #ccc', padding: '10px' }}>
              <span>{item.title} - {item.price} €</span>
              <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}>Supprimer</button>
            </div>
          ))}
          <h3 style={{ marginTop: '20px' }}>Total : {total} €</h3>
        </>
      )}
    </div>
  );
}

export default Cart;