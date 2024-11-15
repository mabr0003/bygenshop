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

  const filteredProducts = selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory);

  return (
    <div>
      <div className="my-4 p-20">
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

      <h1 className="pl-20 pb-4 text-3xl font-black">PRODUCTS</h1>
      <h2 className="pl-20">Explore our wide selection of premium goods.</h2>
      <div className="md:grid grid-cols-[2fr_1fr] p-20">
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
