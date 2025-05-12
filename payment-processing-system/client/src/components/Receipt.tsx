import React from 'react';
import { Payment } from '../types';

interface Props {
  payment: Payment;
  onBack: () => void;
}

const Receipt: React.FC<Props> = ({ payment, onBack }) => {
  return (
    <div className="p-4 rounded-xl bg-green-50 text-gray-800 shadow">
      <h2 className="text-xl font-bold mb-4">🧾 Order Receipt</h2>
      {payment.name && <p><strong>Name:</strong> {payment.name}</p>}
{payment.email && <p><strong>Email:</strong> {payment.email}</p>}

      <p><strong>Amount Paid:</strong> ${payment.amount}</p>
      <p><strong>Payment Method:</strong> {payment.method}</p>
      <p><strong>Status:</strong> {payment.status}</p>
      <p><strong>Date:</strong> {new Date(payment.date).toLocaleString()}</p>

      <div className="mt-6">
        <button
          onClick={onBack}
          className="w-full bg-gray-900 text-white font-semibold py-2 rounded hover:bg-gray-800 transition"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default Receipt;
