import { useState } from "react";
import productsData from "../assets/data/products.json";
import { HiArrowTurnDownRight } from "react-icons/hi2";
import { useCart } from "./cart-context";

const ProductList = () => {
  const { cart, setCart } = useCart();
  const [selectedColorImages, setSelectedColorImages] = useState({});
  const [selectedColors, setSelectedColors] = useState({});
  const [modalInfo, setModalInfo] = useState(null);

  const handleColorChange = (productId, colorName, image) => {
    setSelectedColorImages({
      ...selectedColorImages,
      [productId]: image,
    });

    setSelectedColors({
      ...selectedColors,
      [productId]: colorName,
    });
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const newQuantity = (prevCart[product.id] || 0) + 1;

      setModalInfo({
        name: product.name,
        quantity: newQuantity,
      });

      return {
        ...prevCart,
        [product.id]: newQuantity,
      };
    });

    setModalInfo({
      name: product.name,
      quantity: (cart[product.id] || 0) + 1,
    });

    setTimeout(() => {
      setModalInfo(null);
    }, 4000);
  };

  return (
    <section className="products-wrapper">
      {productsData.map((product) => {
        const selectedColor =
          selectedColors[product.id] || product.colors[0].name;
        const textColor = selectedColor === "Pink" ? "#212222" : "#fd0880";

        const reversedColors = [...product.colors].reverse();

        return (
          <div key={product.id} className="product-card">
            <div className="product-info">
              <h2 style={{ color: textColor }}>{product.name}</h2>
              <p style={{ color: textColor }}>{product.description}</p>

              <div className="color-options">
                {reversedColors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      handleColorChange(product.id, color.name, color.image)
                    }
                    style={{
                      backgroundColor:
                        color.name === "Pink" ? "#fd0880" : "#212222",
                      width: "45px",
                      height: "14px",
                      border: "none",
                      cursor: "pointer",
                      marginRight: "15px",
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="product-image">
              <img
                src={selectedColorImages[product.id] || product.colors[0].image}
                alt={product.name}
              />
            </div>
            <div className="buy-button-wrapper">
              <button
                className="buy-button"
                onClick={() => handleAddToCart(product)}
              >
                Buy
              </button>
              <HiArrowTurnDownRight className="buy-icon" />
            </div>
          </div>
        );
      })}

      {/*Confirmación de compra */}
      {modalInfo && (
        <div className="cart-modal">
          <p>{modalInfo.name} added to cart</p>
        </div>
      )}
    </section>
  );
};

export default ProductList;
