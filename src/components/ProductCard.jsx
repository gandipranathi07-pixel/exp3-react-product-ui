function ProductCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} className="product-image" />

      <h2>{props.title}</h2>

      <p className="price">Price: ₹{props.price}</p>

      <p className={props.inStock ? "stock" : "out"}>
        {props.inStock ? "In Stock" : "Out of Stock"}
      </p>

      <button disabled={!props.inStock}>
        {props.inStock ? "Buy Now" : "Unavailable"}
      </button>
    </div>
  );
}

export default ProductCard;
