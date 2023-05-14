import CryptoBuy from './components/CryptoBuy';
import React from 'react';
import Context from './components/context';
import Orders from './components/orders';

export default function App() {
  const [orders, setOrders] = React.useState([
    { id: '471', comment: 'First Order', XRP: { price: 30, quantity: 1 } },
  ]);

  const addOrder = order =>
    setOrders([...orders, { id: Math.floor(Math.random() * 1000), ...order }]);

  return (
    <Context.Provider value={{ addOrder }}>
      <CryptoBuy />
      <Orders />
    </Context.Provider>
  );
}
