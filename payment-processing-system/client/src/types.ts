export type PaymentStatus = 'Completed' | 'Pending' | 'Failed';

export interface Payment {
  id: number;
  amount: number;
  method: string;
  status: 'Completed' | 'Pending' | 'Failed';
  date: string;
  name?: string;
  email?: string;
}

