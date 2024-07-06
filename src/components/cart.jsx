function Cart(props) {
  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {props.cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;