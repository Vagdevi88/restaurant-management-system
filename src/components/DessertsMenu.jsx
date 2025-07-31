import React from 'react';
import MenuCard from './MenuCard';
import MenuItem from './MenuItem';

const menuItemNames = {
  chocoBrownie: 'Choco Brownie',
  gulabJamun: 'Gulab Jamun with Ice Cream',
  paan: 'Paan',
  rasmalai: 'Rasmalai',
  jalebi: 'Jalebi'
};

const DessertsMenu = ({ items, onCheckChange, onQuantityChange }) => {
  return (
    <MenuCard title="Desserts Menu">
      {Object.entries(items).map(([key, item]) => (
        <MenuItem
          key={key}
          name={key}
          displayName={menuItemNames[key]}
          checked={item.checked}
          quantity={item.quantity}
          onCheckChange={onCheckChange}
          onQuantityChange={onQuantityChange}
        />
      ))}
    </MenuCard>
  );
};

export default DessertsMenu;