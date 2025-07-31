import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CalculatorContainer = styled.div`
  background-color: var(--background-light);
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  overflow: hidden;
`;

const Display = styled.div`
  background-color: var(--background-light);
  color: var(--text-dark);
  padding: 15px;
  text-align: right;
  font-size: 1.5rem;
  font-weight: 500;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius) var(--border-radius) 0 0;
`;

const ButtonsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Button = styled(motion.button)`
  background-color: ${props => 
    props.operator ? 'var(--primary-color)' : 
    props.equals ? 'var(--primary-dark)' : 
    props.clear ? 'var(--warning-color)' : 
    'var(--background-light)'
  };
  color: ${props => 
    (props.operator || props.equals || props.clear) ? 'var(--text-light)' : 'var(--text-dark)'
  };
  border: 1px solid var(--border-color);
  height: 50px;
  font-size: 1.2rem;
  font-weight: ${props => props.bold ? '600' : '400'};
  cursor: pointer;
  transition: all var(--transition-speed);

  &:hover {
    background-color: ${props => 
      props.operator ? 'var(--primary-light)' : 
      props.equals ? 'var(--primary-color)' : 
      props.clear ? 'var(--error-color)' : 
      'var(--background-dark)'
    };
  }
`;

const Calculator = ({ value, setValue }) => {
  const handleButtonClick = (input) => {
    if (input === 'C') {
      setValue('0');
    } else if (input === '=') {
      try {
        setValue(eval(value).toString());
      } catch (error) {
        setValue('Error');
      }
    } else {
      setValue(value === '0' ? input : value + input);
    }
  };

  return (
    <CalculatorContainer>
      <Display>{value}</Display>
      <ButtonsGrid>
        <Button 
          whileTap={{ scale: 0.95 }} 
          onClick={() => handleButtonClick('7')}
          bold
        >7</Button>
        <Button 
          whileTap={{ scale: 0.95 }} 
          onClick={() => handleButtonClick('8')}
          bold
        >8</Button>
        <Button 
          whileTap={{ scale: 0.95 }} 
          onClick={() => handleButtonClick('9')}
          bold
        >9</Button>
        <Button 
          whileTap={{ scale: 0.95 }} 
          onClick={() => handleButtonClick('+')}
          operator
        >+</Button>
        
        <Button 
          whileTap={{ scale: 0.95 }} 
          onClick={() => handleButtonClick('4')}
          bold
        >4</Button>
        <Button 
          whileTap={{ scale: 0.95 }} 
          onClick={() => handleButtonClick('5')}
          bold
        >5</Button>
        <Button 
          whileTap={{ scale: 0.95 }} 
          onClick={() => handleButtonClick('6')}
          bold
        >6</Button>
        <Button 
          whileTap={{ scale: 0.95 }} 
          onClick={() => handleButtonClick('-')}
          operator
        >-</Button>
        
        <Button 
          whileTap={{ scale: 0.95 }} 
          onClick={() => handleButtonClick('1')}
          bold
        >1</Button>
        <Button 
          whileTap={{ scale: 0.95 }} 
          onClick={() => handleButtonClick('2')}
          bold
        >2</Button>
        <Button 
          whileTap={{ scale: 0.95 }} 
          onClick={() => handleButtonClick('3')}
          bold
        >3</Button>
        <Button 
          whileTap={{ scale: 0.95 }} 
          onClick={() => handleButtonClick('*')}
          operator
        >×</Button>
        
        <Button 
          whileTap={{ scale: 0.95 }} 
          onClick={() => handleButtonClick('=')}
          equals
        >=</Button>
        <Button 
          whileTap={{ scale: 0.95 }} 
          onClick={() => handleButtonClick('C')}
          clear
        >C</Button>
        <Button 
          whileTap={{ scale: 0.95 }} 
          onClick={() => handleButtonClick('0')}
          bold
        >0</Button>
        <Button 
          whileTap={{ scale: 0.95 }} 
          onClick={() => handleButtonClick('/')}
          operator
        >÷</Button>
      </ButtonsGrid>
    </CalculatorContainer>
  );
};

export default Calculator;