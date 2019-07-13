import React, { Component } from 'react';
import { Input, Row, Col, Icon } from 'antd';
import './Home.css';
import 'antd/dist/antd.css';

const { Search } = Input;
class Home extends Component {
  state = {}
  render() {
    return (
      <div>
        <div className="Top">
          <Row style={{ lineHeight: '32px' }}>
            <Col span={6} className="log">
              <a href="/Home" className="logtext">网易严选</a>
            </Col>
            <Col span={14} className="TopSearch">
              <Search
                placeholder="搜索商品 共有xx款好物"
                onSearch={value => console.log(value)}
                style={{ width: 200, backgroundColor: "#ececec" }}
              />
            </Col>
            <Col span={4} style={{ magrenLeft: 0 }}>
              <div className="loginbtn">登录</div>
            </Col>
          </Row>
          <div className="list">
            <div className="menu">
              <span className="text">推荐</span>
              <span className="text">居家生活</span>
              <span className="text">服饰鞋包</span>
              <span className="text">美食酒水</span>
              <span className="text">个护清洁</span>
              <span className="text">母婴亲子</span>
              <span className="text">运动旅游</span>
              <span className="text">数码家电</span>
            </div>
            <div className="more-menu">
              <Icon type="down" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;