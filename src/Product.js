import './Product.css';

function Product({ item, addToCart }) {
  return (
    <div className="product">
      <p>{item.name} - {item.price}</p>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
}

export default Product;
