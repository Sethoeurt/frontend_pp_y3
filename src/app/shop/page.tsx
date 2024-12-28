'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { IProduct } from '../../types';

const Page = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [newProduct, setNewProduct] = useState<Omit<IProduct, '_id'>>({
    name: '',
    price: 0,
    description: '',
    image: '',
  });
  const [formLoading, setFormLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct),
      });
      if (res.ok) {
        setNewProduct({ name: '', price: 0, description: '', image: '' });
        setShowForm(false);
        fetchProducts();
      }
    } catch (error) {
      console.error('Error adding product:', error);
    } finally {
      setFormLoading(false);
    }
  };

  const handleDeleteProduct = async (id: string) => {
    try {
      const res = await fetch(`/api/products/${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchProducts();
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <main className="p-8">
      <button
        onClick={() => setShowForm(!showForm)}
        className="mb-8 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
      >
        {showForm ? 'Cancel' : 'Add New Product'}
      </button>

      {showForm && (
        <form onSubmit={handleAddProduct} className="mb-8 space-y-4 max-w-md">
          <input
            type="text"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="number"
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            placeholder="Description"
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            {formLoading ? 'Adding...' : 'Add Product'}
          </button>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <div key={product._id} className="bg-orange-100 p-5 rounded-md shadow-lg">
            <Image
              className="w-full h-96 rounded-md transition-transform duration-300 transform hover:scale-110"
              src={product.image}
              alt={product.name}
              height={400}
              width={400}
            />
            <h3 className="mt-6 mb-2 text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">
              <small>{product.description}</small>
            </p>
            <div className="mt-2 mb-3">
              <b>Rs.{product.price}</b>
            </div>
            <div className="flex justify-between">
              <button className="px-6 py-3 bg-yellow-600 text-white font-bold rounded cursor-pointer hover:shadow-xl hover:bg-yellow-700 transition-all duration-300">
                Add To Cart
              </button>
              <button
                onClick={() => handleDeleteProduct(product._id)}
                className="px-4 py-2 bg-red-600 text-white font-bold rounded cursor-pointer hover:shadow-xl hover:bg-red-700 transition-all duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Page;
