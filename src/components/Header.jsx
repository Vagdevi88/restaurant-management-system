import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderContainer = styled.header`
  background-color: var(--primary-color);
  color: var(--text-light);
  padding: 20px;
  border-radius: var(--border-radius);
  text-align: center;
  box-shadow: var(--card-shadow);
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 10px;
  font-weight: 700;
`;

const DateTime = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
`;

const Header = ({ currentTime }) => {
  return (
    <HeaderContainer>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Vagdevi's RESTAURANT
      </Title>
      <DateTime>{currentTime}</DateTime>
    </HeaderContainer>
  );
};

export default Header;