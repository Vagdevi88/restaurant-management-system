import React from 'react';
import styled from 'styled-components';

const SummaryContainer = styled.div`
  background-color: var(--background-light);
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  padding: 20px;
`;

const Title = styled.h2`
  color: var(--primary-color);
  font-size: 1.5rem;
  margin-bottom: 15px;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--primary-light);
`;

const PaymentSelect = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid var(--border-color);
  font-size: 1rem;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 5px 0;
  border-bottom: 1px dotted var(--border-color);
  
  &:last-child {
    margin-top: 15px;
    padding-top: 10px;
    border-bottom: none;
    border-top: 2px solid var(--primary-color);
    font-weight: 700;
    font-size: 1.1rem;
  }
`;

const ItemLabel = styled.span`
  font-weight: 500;
`;

const ItemValue = styled.span`
  font-weight: ${props => props.bold ? '700' : '400'};
  color: ${props => props.total ? 'var(--primary-color)' : 'inherit'};
`;

const BillSummary = ({ summary, paymentMethod, setPaymentMethod }) => {
  const { subTotal, tax, serviceCharge, totalAmount } = summary;
  
  const formatCurrency = (amount) => {
    return `$${amount.toFixed(2)}`;
  };

  return (
    <SummaryContainer>
      <Title>Bill Summary</Title>
      
      <PaymentSelect>
        <Label htmlFor="paymentMethod">Payment Method:</Label>
        <Select 
          id="paymentMethod" 
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="Cash">Cash</option>
          <option value="Master Card">Master Card</option>
          <option value="Visa Card">Visa Card</option>
          <option value="Debit Card">Debit Card</option>
        </Select>
      </PaymentSelect>
      
      <SummaryItem>
        <ItemLabel>Subtotal:</ItemLabel>
        <ItemValue>{formatCurrency(subTotal)}</ItemValue>
      </SummaryItem>
      
      <SummaryItem>
        <ItemLabel>Tax (9%):</ItemLabel>
        <ItemValue>{formatCurrency(tax)}</ItemValue>
      </SummaryItem>
      
      <SummaryItem>
        <ItemLabel>Service Charge (10%):</ItemLabel>
        <ItemValue>{formatCurrency(serviceCharge)}</ItemValue>
      </SummaryItem>
      
      <SummaryItem>
        <ItemLabel>Total Amount:</ItemLabel>
        <ItemValue bold total>{formatCurrency(totalAmount)}</ItemValue>
      </SummaryItem>
    </SummaryContainer>
  );
};

export default BillSummary;