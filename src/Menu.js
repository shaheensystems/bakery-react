import './Menu.css';
import Product from './Product';
import Newsletter from './Newsletter';
const bakeryItems = [
    { id: 1, name: "Lamington",Image: "images/Muffin.jpg", price: "$3", category: "Cakes" },
    { id: 2, name: "Pavlova",Image: "images/Croissant.jpg", price: "$4.5", category: "Cakes" },
    { id: 3, name: "Croissant",Image: "images/Croissant.jpg", price: "$2.5", category: "Pastries" },
    { id: 4, name: "Baguette",Image: "images/Croissant.jpg", price: "$1.5", category: "Breads" },
    { id: 5, name: "Sourdough",Image: "images/Muffin.jpg", price: "$2", category: "Breads" },
    { id: 6, name: "Danish",Image: "images/Croissant.jpg", price: "$3", category: "Pastries" },
    { id: 7, name: "Muffin",Image: "images/Muffin.jpg", price: "$2.5", category: "Pastries" },
  ];

  function Menu({ addToCart }) {
    const categories = [...new Set(bakeryItems.map(item => item.category))];
  
    return (
        <>
      <div className="menu">
        
           { bakeryItems.map(item => (
                <Product key={item.id} item={item} addToCart={addToCart} />
              ))}
          
        
      </div>
      <Newsletter />
      </>
    );
  }
  
  export default Menu;
