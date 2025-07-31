import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 8px;
  border-radius: var(--border-radius);
  transition: background-color var(--transition-speed);
  
  &:hover {
    background-color: var(--background-dark);
  }
`;

const Checkbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
  width: 18px;
  height: 18px;
`;

const Label = styled.label`
  flex-grow: 1;
  cursor: pointer;
  font-weight: ${props => props.checked ? '500' : '400'};
`;

const QuantityInput = styled.input`
  width: 60px;
  padding: 5px;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  text-align: right;
  background-color: ${props => props.disabled ? '#f0f0f0' : 'white'};
`;

const MenuItem = ({ name, displayName, checked, quantity, onCheckChange, onQuantityChange, disabled }) => {
  return (
    <ItemContainer
      as={motion.div}
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
    >
      <Checkbox 
        type="checkbox" 
        id={name} 
        checked={checked}
        onChange={() => onCheckChange(name)}
      />
      <Label htmlFor={name} checked={checked}>{displayName}</Label>
      <QuantityInput 
        type="number" 
        min="0"
        value={quantity} 
        onChange={(e) => onQuantityChange(name, parseInt(e.target.value) || 0)}
        disabled={!checked || disabled}
      />
    </ItemContainer>
  );
};

export default MenuItem;