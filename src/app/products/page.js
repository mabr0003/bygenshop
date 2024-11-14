"use client";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Basket from "../components/Basket";

export default function Products() {
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchProducts = async () => {
      let response = await fetch("https://dummyjson.com/products");
      let data = await response.json();
      setProducts(data.products);

      // Extract unique categories.
      const uniqueCategories = [...new Set(data.products.map((product) => product.category))];
      setCategories(uniqueCategories);
    };
    fetchProducts();
  }, []);

  const addItemToBasket = (product) => {
    setItems((newItems) => {
      const existingItem = newItems.find((item) => item.id === product.id);
      if (existingItem) {
        return newItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
      } else {
        return [...newItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromBasket = (productId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  // Filter products based on selected category
  const filteredProducts = selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory);

  return (
    <div>
      {/* Filter dropdown */}
      <div className="my-4">
        <label htmlFor="category-filter" className="mr-2">
          Filter by category:
        </label>
        <select id="category-filter" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="border p-2">
          <option value="All">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="md:grid grid-cols-[3fr_1fr]">
        <ul className="md:grid grid-cols-3 gap-10">
          {filteredProducts.map((product) => (
            <ProductCard image={product.thumbnail} productname={product.title} price={product.price} key={product.id} setItems={addItemToBasket} product={product} />
          ))}
        </ul>
        <Basket items={items} removeFromBasket={removeFromBasket} />
      </div>
    </div>
  );
}
