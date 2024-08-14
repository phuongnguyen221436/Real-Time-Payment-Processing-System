import styled from 'styled-components';

// Global Container
export const AppContainer = styled.div`
    max-width: 1200px;
    margin: auto;
    padding: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f8f9fa;
`;

// Header Styling
export const Header = styled.header`
    padding: 20px;
    background-color: #00aaff;
    color: white;
    text-align: center;
    border-radius: 8px;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-size: 24px;
`;

// Form Container
export const FormContainer = styled.div`
    max-width: 600px;
    margin: auto;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Form Elements
export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    margin-bottom: 8px;
    font-weight: 600;
    color: #333;
`;

export const Input = styled.input`
    margin-bottom: 12px;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #dcdcdc;
    font-size: 16px;
    transition: border-color 0.3s ease;

    &:focus {
        border-color: #00aaff;
        outline: none;
    }
`;

export const Select = styled.select`
    margin-bottom: 12px;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #dcdcdc;
    font-size: 16px;
    transition: border-color 0.3s ease;

    &:focus {
        border-color: #00aaff;
        outline: none;
    }
`;

export const Button = styled.button`
    padding: 12px;
    background-color: #00aaff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #007acc;
    }

    &:disabled {
        background-color: #b0b0b0;
        cursor: not-allowed;
    }
`;

// Payment List Styling
export const ListContainer = styled.div`
    margin-top: 20px;
    max-width: 1000px;
    margin: auto;
`;

export const PaymentItem = styled.div`
    padding: 15px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const PaymentDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const PaymentText = styled.p`
    margin: 0;
    font-size: 14px;
    color: #333;
`;

export const Loading = styled.div`
    text-align: center;
    font-size: 1.2em;
    color: #6c757d;
    margin: 20px 0;
`;

export const Error = styled.div`
    text-align: center;
    font-size: 1.2em;
    color: #dc3545;
    margin: 20px 0;
`;

export const SearchInput = styled.input`
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #dcdcdc;
    font-size: 16px;
    width: 100%;
    transition: border-color 0.3s ease;

    &:focus {
        border-color: #00aaff;
        outline: none;
    }
`;

export const PaginationControls = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    font-size: 14px;

    button {
        padding: 8px 12px;
        background-color: #00aaff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #007acc;
        }

        &:disabled {
            background-color: #b0b0b0;
            cursor: not-allowed;
        }
    }
`;

export const SelectContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    align-items: center;
`;
