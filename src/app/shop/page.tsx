"use client";

import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";

interface IProduct {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

export default function ShopPage() {
  const [products] = useState<IProduct[]>([
    {
      id: "1",
      name: "Premium Wireless Headphones",
      price: 299,
      description: "High-fidelity audio with noise cancellation and 30-hour battery life.",
      image: "https://tse3.mm.bing.net/th?id=OIP.3UWKoHQwlopVlHB1G86-dAHaGd&pid=Api&P=0&h=220",
    },
    {
      id: "2",
      name: "Smart Fitness Watch",
      price: 199,
      description: "Track your health metrics with this sleek and powerful smartwatch.",
      image: "https://tse3.mm.bing.net/th?id=OIP.3UWKoHQwlopVlHB1G86-dAHaGd&pid=Api&P=0&h=220.0
      
      
      
      
      
      
      
      
      
      
      
      
      
      ",
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <main className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Our Products</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="relative overflow-hidden aspect-square">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-purple-600">${product.price}</span>
                  <button className="p-2 bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200 transition-colors duration-200">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
