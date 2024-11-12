"use client";
import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Basket from "../components/Basket";

export default function Products() {
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let response = await fetch("https://dummyjson.com/products");
      let data = await response.json();
      setProducts(data.products);
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

  return (
    <div>
      <div className="md:grid grid-cols-[4fr_1fr]">
        <ul className="md:grid grid-cols-3 gap-10">
          {products.map((product) => (
            <ProductCard image={product.thumbnail} productname={product.title} price={product.price} key={product.id} setItems={addItemToBasket} product={product} />
          ))}
        </ul>
        <Basket items={items} removeFromBasket={removeFromBasket} />
      </div>
    </div>
  );
}
