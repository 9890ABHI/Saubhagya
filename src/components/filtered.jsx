import React, { useState, useEffect } from "react";

const ClothingBrand = () => {
  const [products, setProducts] = useState([]); // Your clothing products data
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: "all",
    priceRange: { min: 0, max: 100 },
    colors: [],
    fabric: "all",
  });

  useEffect(() => {
    // Fetch products from an API or set products in state
    // Example: fetchProducts().then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    // Apply filters whenever filter criteria change
    const filtered = products.filter((product) => {
      const { category, price, color, fabric } = product;
      const {
        category: selectedCategory,
        priceRange,
        colors,
        fabric: selectedFabric,
      } = filters;

      if (selectedCategory !== "all" && category !== selectedCategory) {
        return false;
      }

      if (price < priceRange.min || price > priceRange.max) {
        return false;
      }

      if (colors.length > 0 && !colors.includes(color)) {
        return false;
      }

      if (selectedFabric !== "all" && fabric !== selectedFabric) {
        return false;
      }

      return true;
    });

    setFilteredProducts(filtered);
  }, [filters, products]);

  // Function to update filters
  const handleCategoryChange = (event) => {
    setFilters({ ...filters, category: event.target.value });
  };

  const handlePriceRangeChange = (values) => {
    setFilters({ ...filters, priceRange: { min: values[0], max: values[1] } });
  };

  const handleColorChange = (event) => {
    const color = event.target.value;
    const updatedColors = [...filters.colors];

    if (updatedColors.includes(color)) {
      updatedColors.splice(updatedColors.indexOf(color), 1);
    } else {
      updatedColors.push(color);
    }

    setFilters({ ...filters, colors: updatedColors });
  };

  const handleFabricChange = (event) => {
    setFilters({ ...filters, fabric: event.target.value });
  };

  // Render the filter UI
  return (
    <div>
      <div>
        <label>Category:</label>
        <select value={filters.category} onChange={handleCategoryChange}>
          <option value="all">All</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          {/* Add more category options */}
        </select>
      </div>

      <div>
        <label>Price Range:</label>
        <input
          type="range"
          min={0}
          max={200} // Set your max price range value
          value={filters.priceRange.min}
          onChange={(e) =>
            handlePriceRangeChange({
              min: +e.target.value,
              max: filters.priceRange.max,
            })
          }
        />
        <input
          type="range"
          min={0}
          max={200} // Set your max price range value
          value={filters.priceRange.max}
          onChange={(e) =>
            handlePriceRangeChange({
              min: filters.priceRange.min,
              max: +e.target.value,
            })
          }
        />
      </div>

      <div>
        <label>Colors:</label>
        <label>
          <input
            type="checkbox"
            value="color1"
            checked={filters.colors.includes("color1")}
            onChange={handleColorChange}
          />
          Color 1
        </label>
        <label>
          <input
            type="checkbox"
            value="color2"
            checked={filters.colors.includes("color2")}
            onChange={handleColorChange}
          />
          Color 2
        </label>
        {/* Add more color options */}
      </div>

      <div>
        <label>Fabric:</label>
        <select value={filters.fabric} onChange={handleFabricChange}>
          <option value="all">All</option>
          <option value="fabric1">Fabric 1</option>
          <option value="fabric2">Fabric 2</option>
          {/* Add more fabric options */}
        </select>
      </div>
    </div>
  );
};

export default ClothingBrand;
