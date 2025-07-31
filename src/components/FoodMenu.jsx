import React from 'react';
import MenuCard from './MenuCard';
import MenuItem from './MenuItem';

const menuItemNames = {
  thali: 'Thali',
  salad: 'Salad',
  biryani: 'Biryani',
  littiChokha: 'Litti Chokha',
  chickenCurry: 'Chicken Curry',
  paneerTikka: 'Paneer Tikka',
  chickenTikka: 'Chicken Tikka',
  fishTikka: 'Fish Tikka'
};

const FoodMenu = ({ items, onCheckChange, onQuantityChange }) => {
  return (
    <MenuCard title="Food Menu">
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

export default FoodMenu;