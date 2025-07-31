import React from 'react';
import MenuCard from './MenuCard';
import MenuItem from './MenuItem';

const menuItemNames = {
  tea: 'Tea',
  coffee: 'Coffee',
  cola: 'Cola',
  orange: 'Orange Juice',
  water: 'Water',
  fruitCocktail: 'Fruit Cocktail'
};

const DrinksMenu = ({ items, onCheckChange, onQuantityChange }) => {
  return (
    <MenuCard title="Drinks Menu">
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

export default DrinksMenu;