import useFetch from "./useFetch.jsx";
import "./UseFetchHookTest.css"; // Import CSS file for styling

export default function UseFetchHookTest() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products",
    {}
  );

  return (
    <div className="container">
      <h1>Use Fetch Hook</h1>
      {pending ? <h3 className="message">Pending! Please wait...</h3> : null}
      {error ? <h3 className="message error">{error}</h3> : null}
      <div className="product-list">
        {data && data.products && data.products.length ? (
          data.products.map((productItem) => (
            <div key={productItem.key} className="product-item">
              <img
                src={productItem.image} // Assuming image URL is provided in the product data
                alt={productItem.title}
                className="product-image"
              />
              <div className="product-details">
                <h2 className="product-title">{productItem.title}</h2>
                <p className="product-description">{productItem.description}</p>
                <p className="product-price">Price: ${productItem.price}</p>
              </div>
            </div>
          ))
        ) : null}
      </div>
    </div>
  );
}
