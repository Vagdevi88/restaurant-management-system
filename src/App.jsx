import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import Header from './components/Header';
import FoodMenu from './components/FoodMenu';
import DrinksMenu from './components/DrinksMenu';
import DessertsMenu from './components/DessertsMenu';
import Calculator from './components/Calculator';
import BillSummary from './components/BillSummary';
import ActionButtons from './components/ActionButtons';
import { generateRandomRef } from './utils/helpers';
import Receipt from './components/Receipt';
import MenuModal from './components/MenuModal';

const AppContainer = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  padding: 20px;
  background-color: var(--background-light);
  box-shadow: var(--card-shadow);
  border-radius: var(--border-radius);
  min-height: 100vh;
`;

const MainContent = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;

const MenuSection = styled.div`
  flex: 3;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const SideSection = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CategoryContainer = styled.div`
  flex: 1;
  min-width: 250px;
`;

function App() {
  
  const [foodItems, setFoodItems] = useState({
    thali: { checked: false, quantity: 0, price: 9 },
    salad: { checked: false, quantity: 0, price: 4 },
    biryani: { checked: false, quantity: 0, price: 19 },
    littiChokha: { checked: false, quantity: 0, price: 3 },
    chickenCurry: { checked: false, quantity: 0, price: 10 },
    paneerTikka: { checked: false, quantity: 0, price: 7 },
    chickenTikka: { checked: false, quantity: 0, price: 10 },
    fishTikka: { checked: false, quantity: 0, price: 10 }
  });

  const [dessertItems, setDessertItems] = useState({
    chocoBrownie: { checked: false, quantity: 0, price: 4 },
    gulabJamun: { checked: false, quantity: 0, price: 5 },
    paan: { checked: false, quantity: 0, price: 3 },
    rasmalai: { checked: false, quantity: 0, price: 5 },
    jalebi: { checked: false, quantity: 0, price: 3 }
  });

  const [drinkItems, setDrinkItems] = useState({
    tea: { checked: false, quantity: 0, price: 2 },
    coffee: { checked: false, quantity: 0, price: 2 },
    cola: { checked: false, quantity: 0, price: 3 },
    orange: { checked: false, quantity: 0, price: 3 },
    water: { checked: false, quantity: 0, price: 2 },
    fruitCocktail: { checked: false, quantity: 0, price: 4 }
  });

  const [paymentMethod, setPaymentMethod] = useState('Cash');
  const [calculatorValue, setCalculatorValue] = useState('0');
  const [summary, setSummary] = useState({
    subTotal: 0,
    tax: 0,
    serviceCharge: 0,
    totalAmount: 0
  });
  const [receiptRef, setReceiptRef] = useState('');
  const [showReceipt, setShowReceipt] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [currentTime, setCurrentTime] = useState(format(new Date(), 'EEEE, MMMM do yyyy, h:mm:ss a'));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(format(new Date(), 'EEEE, MMMM do yyyy, h:mm:ss a'));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  
  const handleFoodCheckChange = (itemKey) => {
    setFoodItems({
      ...foodItems,
      [itemKey]: {
        ...foodItems[itemKey],
        checked: !foodItems[itemKey].checked,
        quantity: !foodItems[itemKey].checked ? foodItems[itemKey].quantity || 1 : 0
      }
    });
  };

  const handleDessertCheckChange = (itemKey) => {
    setDessertItems({
      ...dessertItems,
      [itemKey]: {
        ...dessertItems[itemKey],
        checked: !dessertItems[itemKey].checked,
        quantity: !dessertItems[itemKey].checked ? dessertItems[itemKey].quantity || 1 : 0
      }
    });
  };

  const handleDrinkCheckChange = (itemKey) => {
    setDrinkItems({
      ...drinkItems,
      [itemKey]: {
        ...drinkItems[itemKey],
        checked: !drinkItems[itemKey].checked,
        quantity: !drinkItems[itemKey].checked ? drinkItems[itemKey].quantity || 1 : 0
      }
    });
  };

  const handleFoodQuantityChange = (itemKey, value) => {
    setFoodItems({
      ...foodItems,
      [itemKey]: {
        ...foodItems[itemKey],
        quantity: value
      }
    });
  };

  const handleDessertQuantityChange = (itemKey, value) => {
    setDessertItems({
      ...dessertItems,
      [itemKey]: {
        ...dessertItems[itemKey],
        quantity: value
      }
    });
  };

  const handleDrinkQuantityChange = (itemKey, value) => {
    setDrinkItems({
      ...drinkItems,
      [itemKey]: {
        ...drinkItems[itemKey],
        quantity: value
      }
    });
  };

  // Calculate total cost
  const calculateTotal = () => {
    // Calculate subtotals for each category
    let foodCost = 0;
    let dessertCost = 0;
    let drinkCost = 0;

    // Calculate food cost
    Object.entries(foodItems).forEach(([_, item]) => {
      if (item.checked) {
        foodCost += item.price * item.quantity;
      }
    });

    // Calculate dessert cost
    Object.entries(dessertItems).forEach(([_, item]) => {
      if (item.checked) {
        dessertCost += item.price * item.quantity;
      }
    });

    // Calculate drink cost
    Object.entries(drinkItems).forEach(([_, item]) => {
      if (item.checked) {
        drinkCost += item.price * item.quantity;
      }
    });

    const subTotal = foodCost + dessertCost + drinkCost;
    const tax = subTotal * 0.09; // 9% tax
    const serviceCharge = subTotal * 0.1; // 10% service charge
    const totalAmount = subTotal + tax + serviceCharge;

    setSummary({
      subTotal,
      tax,
      serviceCharge,
      totalAmount
    });
  };

  // Generate receipt
  const generateReceipt = () => {
    setReceiptRef(generateRandomRef());
    setShowReceipt(true);
  };

  // Reset function
  const reset = () => {
    setFoodItems(Object.fromEntries(
      Object.entries(foodItems).map(([key, _]) => [key, { checked: false, quantity: 0, price: foodItems[key].price }])
    ));
    
    setDessertItems(Object.fromEntries(
      Object.entries(dessertItems).map(([key, _]) => [key, { checked: false, quantity: 0, price: dessertItems[key].price }])
    ));
    
    setDrinkItems(Object.fromEntries(
      Object.entries(drinkItems).map(([key, _]) => [key, { checked: false, quantity: 0, price: drinkItems[key].price }])
    ));
    
    setSummary({
      subTotal: 0,
      tax: 0,
      serviceCharge: 0,
      totalAmount: 0
    });
    
    setCalculatorValue('0');
    setShowReceipt(false);
    setPaymentMethod('Cash');
  };

  return (
    <AppContainer>
      <Header currentTime={currentTime} />
      
      <MainContent>
        <MenuSection>
          <CategoryContainer>
            <FoodMenu 
              items={foodItems} 
              onCheckChange={handleFoodCheckChange} 
              onQuantityChange={handleFoodQuantityChange} 
            />
          </CategoryContainer>
          
          <CategoryContainer>
            <DrinksMenu 
              items={drinkItems} 
              onCheckChange={handleDrinkCheckChange} 
              onQuantityChange={handleDrinkQuantityChange} 
            />
          </CategoryContainer>
          
          <CategoryContainer>
            <DessertsMenu 
              items={dessertItems} 
              onCheckChange={handleDessertCheckChange} 
              onQuantityChange={handleDessertQuantityChange} 
            />
          </CategoryContainer>
        </MenuSection>
        
        <SideSection>
          <Calculator value={calculatorValue} setValue={setCalculatorValue} />
          
          <BillSummary 
            summary={summary} 
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />
          
          <ActionButtons 
            onTotal={calculateTotal}
            onReceipt={generateReceipt}
            onReset={reset}
            onShowMenu={() => setShowMenu(true)}
            onExit={() => window.confirm('Are you sure you want to exit?')}
          />
        </SideSection>
      </MainContent>

      {showReceipt && (
        <Receipt 
          receiptRef={receiptRef}
          date={format(new Date(), 'dd/MM/yy')}
          foodItems={foodItems}
          dessertItems={dessertItems}
          drinkItems={drinkItems}
          summary={summary}
          onClose={() => setShowReceipt(false)}
        />
      )}

      {showMenu && (
        <MenuModal onClose={() => setShowMenu(false)} />
      )}
    </AppContainer>
  );
}

export default App;