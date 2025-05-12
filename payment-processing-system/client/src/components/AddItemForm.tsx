import React, { useState } from 'react';

interface Product {
  name: string;
  price: number;
}

interface Props {
  onAdd: (item: Product) => void;
}

const products: Product[] = [
  { name: 'T-shirt', price: 25 },
  { name: 'Sneakers', price: 75 },
  { name: 'Headphones', price: 50 },
  { name: 'Water Bottle', price: 15 },
  { name: 'Notebook', price: 10 },
];

const AddItemForm: React.FC<Props> = ({ onAdd }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedProduct = products[selectedIndex];
    onAdd(selectedProduct);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
      <h2 className="text-lg font-bold text-gray-800">Add Item to Cart</h2>

      <select
        value={selectedIndex}
        onChange={(e) => setSelectedIndex(Number(e.target.value))}
        className="w-full p-3 rounded border border-gray-300"
      >
        {products.map((product, index) => (
          <option key={index} value={index}>
            {product.name} — ${product.price}
          </option>
        ))}
      </select>

      <button
        type="submit"
        className="w-full bg-gray-900 text-white font-semibold py-2 rounded hover:bg-gray-800 transition"
      >
        Add to Cart
      </button>
    </form>
  );
};

export default AddItemForm;
