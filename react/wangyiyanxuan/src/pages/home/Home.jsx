import React, { Component } from 'react';
import Carousel from "../../components/Carousel/Carousel.jsx";
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <div className="message">
          <img src="https://haitao.nos.netease.com/8Bmnhqys9uRTOq9kXnPHly6tECwVp4TwT1806271503_1125_68.png?imageView&type=webp&thumbnail=1125x68&quality=95" alt=""/>
        </div>
      </div>
    )
  }
}
export default Home;