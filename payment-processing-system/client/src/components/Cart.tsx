import React from 'react';

interface CartItem {
  name: string;
  price: number;
}

interface Props {
  items: CartItem[];
  onRemove: (index: number) => void;
  clearCart: () => void;
}

const Cart: React.FC<Props> = ({ items, onRemove, clearCart }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold text-gray-800 mb-2">Your Cart</h2>
      <ul className="text-sm text-gray-700 space-y-1">
        {items.map((item, i) => (
          <li key={i} className="flex justify-between items-center">
            <div>
              <span>{item.name}</span> — <span>${item.price}</span>
            </div>
            <button
              className="text-sm text-red-600 hover:underline"
              onClick={() => onRemove(i)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center mt-4">
      <div className="text-right mt-4">
  <span className="font-bold text-lg text-gray-900">Total: ${total}</span>
</div>
        <button
          onClick={clearCart}
          className="text-sm text-red-600 hover:underline"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
