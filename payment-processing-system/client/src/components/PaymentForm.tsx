import React, { useState } from 'react';
import { FormContainer, Form, Label, Input, Select, Button } from '../styles';

interface Payment {
    _id: string;
    amount: number;
    method: string;
    status: string;
    date: string;
}

interface PaymentFormProps {
    onPaymentSuccess: (payment: Payment) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ onPaymentSuccess }) => {
    const [amount, setAmount] = useState<number>(0);
    const [method, setMethod] = useState<string>('Credit Card');
    const [status, setStatus] = useState<string>('Pending');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newPayment: Payment = {
            _id: `${Date.now()}`,
            amount,
            method,
            status,
            date: new Date().toISOString(),
        };
        onPaymentSuccess(newPayment);
        setAmount(0);
        setMethod('Credit Card');
        setStatus('Pending');
    };

    return (
        <FormContainer>
            <Form onSubmit={handleSubmit}>
                <Label htmlFor="amount">Amount</Label>
                <Input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    required
                />

                <Label htmlFor="method">Payment Method</Label>
                <Select
                    id="method"
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                >
                    <option value="Credit Card">Credit Card</option>
                    <option value="PayPal">PayPal</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                </Select>

                <Label htmlFor="status">Status</Label>
                <Select
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                    <option value="Failed">Failed</option>
                </Select>

                <Button type="submit">Add Payment</Button>
            </Form>
        </FormContainer>
    );
};

export default PaymentForm;
