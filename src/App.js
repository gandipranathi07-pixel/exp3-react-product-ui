import "./App.css";
import ProductCard from "./components/ProductCard";

// import images
import headphones from "./images/headphones.png";
import watch from "./images/watch.png";

function App() {
  return (
    <div className="App">
      <h1>Product Cards</h1>

      <div className="card-container">

        <ProductCard
          title="Wireless Headphones"
          price="1999"
          image={headphones}
          inStock={true}
        />

        <ProductCard
          title="Smart Watch"
          price="2999"
          image={watch}
          inStock={false}
        />

      </div>
    </div>
  );
}

export default App;


