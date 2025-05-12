import React from 'react';
import { Payment } from '../types';

interface Props {
  payments: Payment[];
}

const PaymentList: React.FC<Props> = ({ payments }) => {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-bold mb-4 text-gray-800">Payment History</h3>

      {payments.length === 0 ? (
        <p className="text-gray-500 text-sm">No payments recorded yet.</p>
      ) : (
        <div className="space-y-4">
          {payments.map((p) => (
            <div
              key={p.id}
              className="rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition bg-white"
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-lg font-semibold text-gray-700">${p.amount}</span>
                <span
                  className={`px-3 py-1 text-sm rounded-full font-medium ${
                    p.status === 'Completed'
                      ? 'bg-green-100 text-green-700'
                      : p.status === 'Pending'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {p.status}
                </span>
              </div>
              <div className="text-sm text-gray-600">
                {p.method} • {new Date(p.date).toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PaymentList;
