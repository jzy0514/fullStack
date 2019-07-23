import React, { Component } from 'react';
import Carousel from "../../components/Carousel/Carousel.jsx";
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="home">
          <Carousel />
          <div className="message">
            <img src="https://haitao.nos.netease.com/8Bmnhqys9uRTOq9kXnPHly6tECwVp4TwT1806271503_1125_68.png?imageView&type=webp&thumbnail=1125x68&quality=95" alt="" />
          </div>
          <div className="menu-1">
            <ul> 
              <li>
                <img src="https://yanxuan.nosdn.127.net/c6fd8835a6400b7da7a016ad85506b69.png" alt="" />
                <a href="#">新品首发</a>
              </li>
              <li>
                <img src="https://yanxuan.nosdn.127.net/fede8b110c502ec5799702d5ec824792.png" alt="" />
                <a href="#">家居生活</a>
              </li>
              <li>
                <img src="https://yanxuan.nosdn.127.net/2415a74cea7d3f080c2dcaa791884572.png" alt="" />
                <a href="#">服饰鞋包</a>
              </li>
              <li>
                <img src="https://yanxuan.nosdn.127.net/d916591adea776351e084016335e5820.png" alt="" />
                <a href="#">美食酒水</a>
              </li>
              <li>
                <img src="https://yanxuan.nosdn.127.net/6c3bd9d885c818b1f73e497335a68b47.png" alt="" />
                <a href="#">个护清洁</a>
              </li>
              <li>
                <img src="https://yanxuan.nosdn.127.net/559d2a240ec20b096590a902217009ff.png" alt="" />
                <a href="#">母婴亲子</a>
              </li>
              <li>
                <img src="https://yanxuan.nosdn.127.net/5c088559ebcc3f0ffcda663f04dfbeb2.png" alt="" />
                <a href="#">运动旅行</a>
              </li>
              <li>
                <img src="https://yanxuan.nosdn.127.net/fbca8e1f2948f0c09fc7672c2c125384.png" alt="" />
                <a href="#">数码家电</a>
              </li>
              <li>
                <img src="https://yanxuan.nosdn.127.net/f7281169d4e82d5d8d52aa1fec83fe01.png" alt="" />
                <a href="#">全球特色</a>
              </li>
              <li>
                <img src="http://yanxuan.nosdn.127.net/3954c3cbeb4359dd7007be7a076e0dda.gif" alt="" />
                <a href="#">超级会员</a>
              </li>
            </ul>
          </div>
          <div className="new">
            <h2 className="new-text">- 新人专享礼 -</h2>
            <div className="content">
              <a className="left" href="#">
                <div className="name">新人专享礼包</div>
                <div className="imgURL">
                  <img src="//yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="" />
                </div>
              </a>
              <div className="right">
                <div className="right1">
                  <div className="right1-text">
                    <h2 className="right1-text1">福利社</h2>
                    <span className="right1-text2">今日特价</span>
                  </div>
                  <div className="right1-img">
                    <img src="https://yanxuan.nosdn.127.net/d83864b34b2e47f2a47b8dbd569209f8.png?imageView&thumbnail=200x200&quality=75" alt="" />
                  </div>
                </div>
                <div className="right2">
                  <div className="right2-text">
                    <h2 className="right2-text1">新人包团</h2>
                    <span className="right2-text2">1元起包邮</span>
                  </div>
                  <div className="right2-img">
                    <img src="http://yanxuan.nosdn.127.net/8cab8087306ee26d8ef22cf91e8ebaf9.png?imageView&thumbnail=200x200&quality=75" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="out"></div>
          <div className="hot"></div>
          <div className="good"></div>
          <div className="time"></div>
          <div className="new-good"></div>
        </div>
      </div>
    )
  }
}
export default Home;