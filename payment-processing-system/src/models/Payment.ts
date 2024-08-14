import { Schema, model, Document } from 'mongoose';

interface IPayment extends Document {
    amount: number;
    method: string;
    status: string;
    date: Date;
}

const PaymentSchema = new Schema<IPayment>({
    amount: {
        type: Number,
        required: true,
    },
    method: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'Pending',
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Payment = model<IPayment>('Payment', PaymentSchema);

export default Payment;

