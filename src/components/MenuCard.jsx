import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background-color: var(--background-light);
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
  padding: 20px;
  height: 100%;
`;

const Title = styled.h2`
  color: var(--primary-color);
  font-size: 1.5rem;
  margin-bottom: 15px;
  padding-bottom: 8px;
  border-bottom: 2px solid var(--primary-light);
`;

const MenuCard = ({ title, children }) => {
  return (
    <Card
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Title>{title}</Title>
      {children}
    </Card>
  );
};

export default MenuCard;