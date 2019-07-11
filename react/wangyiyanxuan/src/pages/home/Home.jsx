import React, { Component } from 'react';
import { Layout, Input, Row, Col, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';

const { Search } = Input;
const { Header, Footer, Content } = Layout;
class Home extends Component {
  state = {}
  render() {
    return (
      <div>
        <Layout>
          <Header className="Top">
            <Row style={{ lineHeight: '32px' }}>
              <Col span={6} className="log">
                <a href="/Home">网易严选</a>
              </Col>
              <Col span={14} className="TopSearch">
                <Search
                  placeholder="搜索商品 共有xx款好物"
                  onSearch={value => console.log(value)}
                  style={{ width: 200 }}  
                />
              </Col>
              <Col span={4}>
                <div className="loginbtn">登录</div>
              </Col>
            </Row>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '32px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
              <Menu.Item key="4">nav 4</Menu.Item>
              <div className="more-menu">
                <Icon type="down" />
              </div>
            </Menu>
          </Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    )
  }
}

export default Home;