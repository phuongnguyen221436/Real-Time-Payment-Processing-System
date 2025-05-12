import React, { useState, useEffect } from 'react';
import { Payment, PaymentStatus } from '../types';


interface Props {
  onAdd: (payment: Payment) => void;
  defaultAmount: number;
}

const PaymentForm: React.FC<Props> = ({ onAdd, defaultAmount }) => {
  const [amount, setAmount] = useState<number>(defaultAmount);
  const [method, setMethod] = useState<string>('💳 Credit Card');
  const [status, setStatus] = useState<PaymentStatus>('Completed');
  const [isProcessing, setIsProcessing] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
  
    setTimeout(() => {
        const newPayment: Payment = {
            id: Date.now(),
            amount,
            method,
            status,
            date: new Date().toISOString(),
            name,
            email,
          };
          
      onAdd(newPayment);
      setAmount(defaultAmount);
      setIsProcessing(false);
    }, 2000); // simulate 2 seconds of processing
  };
  

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* 🔒 Secure Badge */}
      <div className="flex items-center justify-center gap-2 text-sm text-green-600 mb-1">
        <span>🔒 Secure Payment</span>
      </div>
      <div>
  <label className="block font-semibold text-gray-700">Full Name</label>
  <input
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    required
    className="w-full p-3 rounded-lg border border-gray-300 mt-1"
  />
</div>

<div>
  <label className="block font-semibold text-gray-700">Email</label>
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    className="w-full p-3 rounded-lg border border-gray-300 mt-1"
  />
</div>


      {/* Amount */}
      <div>
        <label className="block font-semibold text-gray-700">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={e => setAmount(Number(e.target.value))}
          className="w-full p-3 rounded-lg border border-gray-300 mt-1"
        />
      </div>

      {/* Payment Method with Icons */}
      <div>
        <label className="block font-semibold text-gray-700">Payment Method</label>
        <select
          value={method}
          onChange={e => setMethod(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300 mt-1"
        >
          <option>💳 Credit Card</option>
          <option>🅿️ PayPal</option>
          <option>🏦 Bank Transfer</option>
        </select>
      </div>

      {/* Status */}
      <div>
        <label className="block font-semibold text-gray-700">Status</label>
        <select
          value={status}
          onChange={e => setStatus(e.target.value as PaymentStatus)}
          className="w-full p-3 rounded-lg border border-gray-300 mt-1"
        >
          <option>Completed</option>
          <option>Pending</option>
          <option>Failed</option>
        </select>
      </div>

      {/* Total */}
      <p className="text-right font-semibold text-gray-900 text-lg">
        Total Due: ${amount}
      </p>

      {/* Submit */}
      <button
  type="submit"
  disabled={isProcessing}
  className={`w-full text-white font-semibold py-3 rounded-lg transition ${
    isProcessing
      ? 'bg-gray-500 cursor-not-allowed'
      : 'bg-gray-900 hover:bg-gray-800'
  }`}
>
  {isProcessing ? 'Processing...' : 'Complete Purchase'}
</button>

    </form>
  );
};

export default PaymentForm;
