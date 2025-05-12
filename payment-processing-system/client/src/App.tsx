import React, { useState, useEffect } from 'react';
import { Payment } from './types';
import PaymentForm from './components/PaymentForm';
import PaymentList from './components/PaymentList';
import Cart from './components/Cart';
import AddItemForm from './components/AddItemForm';
import Receipt from './components/Receipt';

const App: React.FC = () => {
  const [payments, setPayments] = useState<Payment[]>(() => {
    const saved = localStorage.getItem('payments');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('payments', JSON.stringify(payments));
  }, [payments]);

  const [cartItems, setCartItems] = useState([
    { name: 'T-shirt', price: 25 },
    { name: 'Sneakers', price: 75 },
    { name: 'Headphones', price: 50 },
  ]);

  const [checkoutStep, setCheckoutStep] = useState(1);
  const [lastPayment, setLastPayment] = useState<Payment | null>(null);

  const addItemToCart = (item: { name: string; price: number }) => {
    setCartItems(prev => [...prev, item]);
  };

  const removeItem = (index: number) => {
    setCartItems(items => items.filter((_, i) => i !== index));
  };

  const clearCart = () => setCartItems([]);

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  const addPayment = (payment: Payment) => {
    setPayments(prev => [payment, ...prev]);
    setLastPayment(payment);
  };

  const resetCheckout = () => {
    clearCart();
    setLastPayment(null);
    setCheckoutStep(1);
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl p-6">
      <div className="flex items-center justify-between text-sm font-medium mb-6 text-gray-500">
  <div className={checkoutStep === 1 ? 'text-gray-900 font-bold' : ''}>🛒 Cart</div>
  <div>→</div>
  <div className={checkoutStep === 2 ? 'text-gray-900 font-bold' : ''}>💳 Payment</div>
  <div>→</div>
  <div className={lastPayment ? 'text-gray-900 font-bold' : ''}>🧾 Receipt</div>
</div>

        <h1 className="text-2xl font-extrabold text-center mb-6 text-gray-900">
          Simulated E-Commerce Checkout
        </h1>

        {lastPayment ? (
          <Receipt payment={lastPayment} onBack={resetCheckout} />
        ) : checkoutStep === 1 ? (
          <>
            <AddItemForm onAdd={addItemToCart} />
            <Cart
              items={cartItems}
              onRemove={removeItem}
              clearCart={clearCart}
            />
            <button
              className="w-full bg-gray-900 text-white font-semibold py-2 rounded hover:bg-gray-800 transition mt-4 disabled:opacity-50"
              disabled={cartItems.length === 0}
              onClick={() => setCheckoutStep(2)}
            >
              Proceed to Payment
            </button>
            <div className="mt-6">
              <PaymentList payments={payments} />
            </div>
          </>
        ) : (
          <>
            <button
              onClick={() => setCheckoutStep(1)}
              className="text-sm text-blue-600 hover:underline mb-3"
            >
              ← Back to Cart
            </button>
            <PaymentForm onAdd={addPayment} defaultAmount={cartTotal} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
