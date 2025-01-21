"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; 

const API_URL = "http://127.0.0.1:3333/api/v1/products";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Fetch products
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setProducts(data.products || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle delete product
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      fetchProducts(); // Refresh product list
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Redirect to edit page
  const handleEdit = (id) => {
    router.push(`/admin/edit-product/${id}`);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Manage Products</h1>

      {/* Loading state */}
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border px-4 py-2">ID</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Stock</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="border px-4 py-2">{product.id}</td>
                <td className="border px-4 py-2">{product.name}</td>
                <td className="border px-4 py-2">{product.price}</td>
                <td className="border px-4 py-2">{product.stockQuantity}</td>
                <td className="border px-4 py-2 space-x-2">
                  <button
                    onClick={() => handleEdit(product.id)}
                    className="px-3 py-1 bg-blue-500 text-white rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageProducts;
