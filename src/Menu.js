import './Menu.css';
import Product from './Product';
const bakeryItems = [
    { id: 1, name: "Lamington", price: "$3", category: "Cakes" },
    { id: 2, name: "Pavlova", price: "$4.5", category: "Cakes" },
    { id: 3, name: "Croissant", price: "$2.5", category: "Pastries" },
    { id: 4, name: "Baguette", price: "$1.5", category: "Breads" },
    { id: 5, name: "Sourdough", price: "$2", category: "Breads" },
    { id: 6, name: "Danish", price: "$3", category: "Pastries" },
    { id: 7, name: "Muffin", price: "$2.5", category: "Pastries" },
  ];

  function Menu({ addToCart }) {
    const categories = [...new Set(bakeryItems.map(item => item.category))];
  
    return (
      <div className="menu">
        {categories.map(category => (
          <div key={category}>
            <h2>{category}</h2>
            {bakeryItems
              .filter(item => item.category === category)
              .map(item => (
                <Product key={item.id} item={item} addToCart={addToCart} />
              ))}
          </div>
        ))}
      </div>
    );
  }
  
  export default Menu;
