import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import NavBar from './app/components/NavBar';
import CartContainer from './app/components/CartContainer';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals, getCartItems } from './features/cart/cartSlice';
import Modal from "./app/components/Modal";


function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  console.log("cartItems", cartItems)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  useEffect(() => {
    dispatch(getCartItems())
  }, [])

  if(isLoading){
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <main>
      <h3 className='App'>Redux ToolKit Cart App</h3>
      {
        isOpen && <Modal />
      }

      <NavBar />
      <CartContainer />
    </main>
  );
}

export default App;
