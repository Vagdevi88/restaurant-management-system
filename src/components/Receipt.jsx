import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ReceiptContainer = styled(motion.div)`
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 30px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-dark);
  
  &:hover {
    color: var(--error-color);
  }
`;

const ReceiptHeader = styled.div`
  text-align: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px dashed #ccc;
`;

const ReceiptTitle = styled.h2`
  font-size: 1.8rem;
  color: var(--primary-color);
  margin-bottom: 5px;
`;

const ReceiptInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 0.9rem;
`;

const ReceiptItems = styled.div`
  margin: 20px 0;
`;

const ItemHeading = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
`;

const ItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  border-bottom: 1px dotted #eee;
  
  &:last-child {
    border-bottom: none;
  }
`;

const ReceiptTotal = styled.div`
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px dashed #ccc;
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  font-size: ${props => props.large ? '1.2rem' : '1rem'};
`;

const menuItemNames = {
  // Food items
  thali: 'Thali',
  salad: 'Salad',
  biryani: 'Biryani',
  littiChokha: 'Litti Chokha',
  chickenCurry: 'Chicken Curry',
  paneerTikka: 'Paneer Tikka',
  chickenTikka: 'Chicken Tikka',
  fishTikka: 'Fish Tikka',
  
  // Dessert items
  chocoBrownie: 'Choco Brownie',
  gulabJamun: 'Gulab Jamun with Ice Cream',
  paan: 'Paan',
  rasmalai: 'Rasmalai',
  jalebi: 'Jalebi',
  
  // Drink items
  tea: 'Tea',
  coffee: 'Coffee',
  cola: 'Cola',
  orange: 'Orange Juice',
  water: 'Water',
  fruitCocktail: 'Fruit Cocktail'
};

const Receipt = ({ receiptRef, date, foodItems, dessertItems, drinkItems, summary, onClose }) => {
  const formatCurrency = (amount) => {
    return `$${amount.toFixed(2)}`;
  };
  
  // Filter items that are checked/selected
  const selectedFoodItems = Object.entries(foodItems).filter(([_, item]) => item.checked);
  const selectedDessertItems = Object.entries(dessertItems).filter(([_, item]) => item.checked);
  const selectedDrinkItems = Object.entries(drinkItems).filter(([_, item]) => item.checked);
  
  return (
    <ModalOverlay>
      <ReceiptContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        <CloseButton onClick={onClose}>
          <FaTimes />
        </CloseButton>
        
        <ReceiptHeader>
          <ReceiptTitle>Vagdevi's RESTAURANT</ReceiptTitle>
          <p>Customer Receipt</p>
          
          <ReceiptInfo>
            <span>Receipt Ref: {receiptRef}</span>
            <span>Date: {date}</span>
          </ReceiptInfo>
        </ReceiptHeader>
        
        <ReceiptItems>
          <ItemHeading>
            <span>Item</span>
            <span>Qty</span>
            <span>Price</span>
          </ItemHeading>
          
          {selectedFoodItems.length > 0 && <h3>Food Items</h3>}
          {selectedFoodItems.map(([key, item]) => (
            <ItemRow key={key}>
              <span>{menuItemNames[key]}</span>
              <span>{item.quantity}</span>
              <span>{formatCurrency(item.price * item.quantity)}</span>
            </ItemRow>
          ))}
          
          {selectedDessertItems.length > 0 && <h3>Dessert Items</h3>}
          {selectedDessertItems.map(([key, item]) => (
            <ItemRow key={key}>
              <span>{menuItemNames[key]}</span>
              <span>{item.quantity}</span>
              <span>{formatCurrency(item.price * item.quantity)}</span>
            </ItemRow>
          ))}
          
          {selectedDrinkItems.length > 0 && <h3>Drink Items</h3>}
          {selectedDrinkItems.map(([key, item]) => (
            <ItemRow key={key}>
              <span>{menuItemNames[key]}</span>
              <span>{item.quantity}</span>
              <span>{formatCurrency(item.price * item.quantity)}</span>
            </ItemRow>
          ))}
        </ReceiptItems>
        
        <ReceiptTotal>
          <TotalRow>
            <span>Subtotal:</span>
            <span>{formatCurrency(summary.subTotal)}</span>
          </TotalRow>
          
          <TotalRow>
            <span>Tax (9%):</span>
            <span>{formatCurrency(summary.tax)}</span>
          </TotalRow>
          
          <TotalRow>
            <span>Service Charge (10%):</span>
            <span>{formatCurrency(summary.serviceCharge)}</span>
          </TotalRow>
          
          <TotalRow bold large>
            <span>Total Amount:</span>
            <span>{formatCurrency(summary.totalAmount)}</span>
          </TotalRow>
        </ReceiptTotal>
        
        <div style={{ textAlign: 'center', marginTop: '30px', fontSize: '0.9rem' }}>
          <p>Thank you for dining with us!</p>
          <p>We hope to see you again soon.</p>
        </div>
      </ReceiptContainer>
    </ModalOverlay>
  );
};

export default Receipt;