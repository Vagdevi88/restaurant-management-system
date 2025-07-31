import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaReceipt, FaCalculator, FaTrash, FaList, FaSignOutAlt } from 'react-icons/fa';

const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const ActionButton = styled(motion.button)`
  background-color: var(--primary-color);
  color: var(--text-light);
  border: none;
  border-radius: var(--border-radius);
  padding: 12px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color var(--transition-speed);
  
  &:hover {
    background-color: var(--primary-light);
  }
  
  &.secondary {
    background-color: var(--secondary-color);
    color: var(--text-dark);
    
    &:hover {
      background-color: #e6c200;
    }
  }
  
  &.danger {
    background-color: var(--error-color);
    
    &:hover {
      background-color: #d32f2f;
    }
  }
  
  svg {
    margin-right: 8px;
  }
`;

const ActionButtons = ({ onTotal, onReceipt, onReset, onShowMenu, onExit }) => {
  return (
    <ButtonsContainer>
      <ActionButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onTotal}
      >
        <FaCalculator /> Total
      </ActionButton>
      
      <ActionButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onReceipt}
      >
        <FaReceipt /> Receipt
      </ActionButton>
      
      <ActionButton
        className="secondary"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onShowMenu}
      >
        <FaList /> Menu
      </ActionButton>
      
      <ActionButton
        className="danger"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onReset}
      >
        <FaTrash /> Reset
      </ActionButton>
      
      <ActionButton
        className="danger"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onExit}
        style={{ gridColumn: "span 2" }}
      >
        <FaSignOutAlt /> Exit
      </ActionButton>
    </ButtonsContainer>
  );
};

export default ActionButtons;