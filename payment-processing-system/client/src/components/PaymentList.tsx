import React, { useState } from 'react';
import { ListContainer, PaymentItem, SearchInput, PaginationControls, PaymentDetails, PaymentText, SelectContainer, Select } from '../styles';

interface Payment {
    _id: string;
    amount: number;
    method: string;
    status: string;
    date: string;
}

interface PaymentListProps {
    payments: Payment[];
}

const methods = ['All', 'Credit Card', 'PayPal', 'Bank Transfer'];
const statuses = ['All', 'Pending', 'Completed', 'Failed'];

const PaymentList: React.FC<PaymentListProps> = ({ payments }) => {
    const [filter, setFilter] = useState<string>('');
    const [selectedMethod, setSelectedMethod] = useState<string>('All');
    const [selectedStatus, setSelectedStatus] = useState<string>('All');
    const [sortBy, setSortBy] = useState<string>('date');
    const [page, setPage] = useState<number>(1);
    const itemsPerPage = 10;

    const filteredPayments = payments.filter(payment => {
        const methodMatch = selectedMethod === 'All' || payment.method === selectedMethod;
        const statusMatch = selectedStatus === 'All' || payment.status === selectedStatus;
        return methodMatch && statusMatch && payment.method.toLowerCase().includes(filter.toLowerCase());
    });

    const sortedPayments = filteredPayments.sort((a, b) => {
        if (sortBy === 'amount') {
            return b.amount - a.amount;
        }
        if (sortBy === 'status') {
            return a.status.localeCompare(b.status);
        }
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    const paginatedPayments = sortedPayments.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    return (
        <ListContainer>
            <SearchInput
                type="text"
                placeholder="Search by method"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <SelectContainer>
                <Select
                    id="method"
                    value={selectedMethod}
                    onChange={(e) => setSelectedMethod(e.target.value)}
                >
                    {methods.map((methodOption) => (
                        <option key={methodOption} value={methodOption}>
                            {methodOption}
                        </option>
                    ))}
                </Select>

                <Select
                    id="status"
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                >
                    {statuses.map((statusOption) => (
                        <option key={statusOption} value={statusOption}>
                            {statusOption}
                        </option>
                    ))}
                </Select>
            </SelectContainer>

            <div>
                <label htmlFor="sort">Sort by:</label>
                <Select
                    id="sort"
                    onChange={(e) => setSortBy(e.target.value)}
                    value={sortBy}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                    <option value="status">Status</option>
                </Select>
            </div>

            {paginatedPayments.length === 0 ? (
                <p>No payments available.</p>
            ) : (
                paginatedPayments.map(payment => (
                    <PaymentItem key={payment._id}>
                        <PaymentDetails>
                            <PaymentText><strong>Amount:</strong> ${payment.amount}</PaymentText>
                            <PaymentText><strong>Method:</strong> {payment.method}</PaymentText>
                            <PaymentText><strong>Status:</strong> {payment.status}</PaymentText>
                            <PaymentText><strong>Date:</strong> {new Date(payment.date).toLocaleDateString()}</PaymentText>
                        </PaymentDetails>
                    </PaymentItem>
                ))
            )}
            <PaginationControls>
                <button onClick={() => setPage(prev => Math.max(prev - 1, 1))} disabled={page === 1}>Previous</button>
                <button onClick={() => setPage(prev => prev + 1)} disabled={paginatedPayments.length < itemsPerPage}>Next</button>
            </PaginationControls>
        </ListContainer>
    );
};

export default PaymentList;
