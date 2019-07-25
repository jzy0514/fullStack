import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
  Redirect, NavLink
} from 'react-router-dom';
import Header from './components/pages/header/Header';
import Home from './components/pages/home/Home';
import Kinds from './components/kinds/kind';
import Cart from './components/cart/cart';
import Mine from './components/mine/mine';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="app-home">
          {/* 路由 */}
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/kinds" component={Kinds} />
            <Route path="/cart" component={Cart} />
            <Route path="/mine" component={Mine} />
            {/* <Route path="/" component={Recommend} /> */}
            <Redirect from="/" to="/home" />
          </Switch>
        </div>
        <div className="app-footer">
          <div className="footer-tab">
            <div className="tab-item">
              <NavLink className="nav-link" to="/home">
                <span>首页</span>
              </NavLink>
            </div>
            <div className="tab-item">
              <NavLink className="nav-link" to="/kinds">
                <span>分类</span>
              </NavLink>
            </div>
            <div className="tab-item">
              <NavLink className="nav-link" to="/cart">
                <span>购物车</span>
              </NavLink>
            </div>
            <div className="tab-item">
              <NavLink className="nav-link" to="/mine">
                <span>个人</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
