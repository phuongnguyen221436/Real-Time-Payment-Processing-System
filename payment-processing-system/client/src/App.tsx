import React, { useState } from 'react';
import PaymentForm from './components/PaymentForm';
import PaymentList from './components/PaymentList';
import { AppContainer, Header, Loading, Error } from './styles';

interface Payment {
    _id: string;
    amount: number;
    method: string;
    status: string;
    date: string;
}

const App: React.FC = () => {
    const [payments, setPayments] = useState<Payment[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handlePaymentSuccess = (newPayment: Payment) => {
        setPayments((prevPayments) => [...prevPayments, newPayment]);
    };

    return (
        <AppContainer>
            <Header>Real-Time Payment Processing System</Header>
            {loading && <Loading>Loading...</Loading>}
            {error && <Error>{error}</Error>}
            <PaymentForm onPaymentSuccess={handlePaymentSuccess} />
            <PaymentList payments={payments} />
        </AppContainer>
    );
};

export default App;
