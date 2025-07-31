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

const MenuContainer = styled(motion.div)`
  background-color: white;
  border-radius: var(--border-radius);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  width: 90%;
  max-width: 700px;
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

const MenuTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 30px;
`;

const MenuSection = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 15px;
  border-bottom: 2px solid var(--primary-light);
  padding-bottom: 8px;
`;

const MenuItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: var(--border-radius);
  
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

const ItemName = styled.div`
  font-weight: 500;
`;

const ItemDetails = styled.div`
  display: flex;
  align-items: center;
`;

const ItemCalories = styled.span`
  color: #666;
  font-size: 0.9rem;
  margin-right: 15px;
`;

const ItemPrice = styled.span`
  font-weight: 700;
  color: var(--primary-color);
`;

const MenuModal = ({ onClose }) => {
  // Menu data
  const foodItems = [
    { name: 'Thali', calories: '470 Cal.', price: '$9' },
    { name: 'Salad', calories: '253 Cal.', price: '$4' },
    { name: 'Biryani', calories: '348 Cal.', price: '$19' },
    { name: 'Litti-Chokha', calories: '285 Cal.', price: '$3' },
    { name: 'Chicken Curry', calories: '296 Cal.', price: '$10' },
    { name: 'Paneer Tikka', calories: '272.2 Cal.', price: '$7' },
    { name: 'Chicken Tikka', calories: '148 Cal.', price: '$10' },
    { name: 'Fish Tikka', calories: '218 Cal.', price: '$10' }
  ];
  
  const dessertItems = [
    { name: 'Chocolate Brownie', calories: '132 Cal.', price: '$4' },
    { name: 'Hot Gulab Jamun with Icecream', calories: '160 Cal.', price: '$5' },
    { name: 'Paan', calories: '75 Cal.', price: '$3' },
    { name: 'Rasmalai', calories: '150 Cal.', price: '$5' },
    { name: 'Jalebi', calories: '123 Cal.', price: '$3' }
  ];
  
  const drinkItems = [
    { name: 'Tea', calories: null, price: '$2' },
    { name: 'Coffee', calories: null, price: '$2' },
    { name: 'Cola', calories: null, price: '$3' },
    { name: 'Orange Juice', calories: null, price: '$3' },
    { name: 'Mineral Water', calories: null, price: '$2' },
    { name: 'Fruit Cocktail', calories: null, price: '$4' }
  ];
  
  return (
    <ModalOverlay>
      <MenuContainer
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <CloseButton onClick={onClose}>
          <FaTimes />
        </CloseButton>
        
        <MenuTitle>Vagdevi's RESTAURANT MENU</MenuTitle>
        
        <MenuSection>
          <SectionTitle>Food Items</SectionTitle>
          {foodItems.map((item, index) => (
            <MenuItemRow key={index}>
              <ItemName>{item.name}</ItemName>
              <ItemDetails>
                {item.calories && <ItemCalories>{item.calories}</ItemCalories>}
                <ItemPrice>{item.price}</ItemPrice>
              </ItemDetails>
            </MenuItemRow>
          ))}
        </MenuSection>
        
        <MenuSection>
          <SectionTitle>Desserts</SectionTitle>
          {dessertItems.map((item, index) => (
            <MenuItemRow key={index}>
              <ItemName>{item.name}</ItemName>
              <ItemDetails>
                {item.calories && <ItemCalories>{item.calories}</ItemCalories>}
                <ItemPrice>{item.price}</ItemPrice>
              </ItemDetails>
            </MenuItemRow>
          ))}
        </MenuSection>
        
        <MenuSection>
          <SectionTitle>Beverages</SectionTitle>
          {drinkItems.map((item, index) => (
            <MenuItemRow key={index}>
              <ItemName>{item.name}</ItemName>
              <ItemDetails>
                {item.calories && <ItemCalories>{item.calories}</ItemCalories>}
                <ItemPrice>{item.price}</ItemPrice>
              </ItemDetails>
            </MenuItemRow>
          ))}
        </MenuSection>
      </MenuContainer>
    </ModalOverlay>
  );
};

export default MenuModal;