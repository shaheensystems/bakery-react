import './Product.css';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
function Product({ item, addToCart }) {
  return (
    <div className="product">
      <img src={item.Image} alt={item.name} />
      <p>{item.name} - {item.price}</p>
      <button className="button">Add to Cart</button>
      <Button variant="contained" onClick={() => addToCart(item)} startIcon={<AddShoppingCartIcon />}>Add to Cart</Button>
    </div>
  );
}

export default Product;
