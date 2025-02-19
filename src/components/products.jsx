import { useState } from "react";
import productsData from "../assets/data/products.json";

const ProductList = () => {
  const [selectedColorImages, setSelectedColorImages] = useState({});
  const [selectedColors, setSelectedColors] = useState({});

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

            <button className="buy-button">Buy</button>
          </div>
        );
      })}
    </section>
  );
};

export default ProductList;
