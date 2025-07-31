import React from 'react';

export const generateRandomRef = () => {
  const randomNum = Math.floor(Math.random() * 499890) + 1000;
  return `BILL${randomNum}`;
};

export const formatCurrency = (amount) => {
  return `$${parseFloat(amount).toFixed(2)}`;
};