import React from 'react';
// import logo from './logo.svg';
import LoginStatus from './LoginStatus';
import ShopCart from './ShopCart';
import WithLogin from './WithLogin';
import './App.css';

// const WithLoginStatus = WithLogin(LoginStatus); // 包装登录组件
// const WithShopCart = WithLogin(ShopCart); // 包装登录组件
function App() {
  return (
    <>
    <LoginStatus />
    <ShopCart />
    {/* 经过包装后的组件 */}
    {/* <WithLoginStatus /> */}
    {/* <WithShopCart a="1" b ="2"/> */}
    </>
  )
}

export default App;
