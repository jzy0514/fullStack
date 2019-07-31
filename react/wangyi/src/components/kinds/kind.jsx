import React, { Component } from 'react';
import { Layout, Input, Menu } from 'antd';
import {
  BrowserRouter as Router, Route, 
  Redirect
} from 'react-router-dom';
import Recommended from './commodity/recommended/recommended';
import Life from './commodity/life/life';
import Bag from './commodity/bag/bag';
import Drink from './commodity/drink/drink';
import Clean from './commodity/clean/clean';
import Mum from './commodity/mum/mum';
import Motion from './commodity/motion/motion';
import Digital from './commodity/digital/digital';
import './kind.css';

const { Header, Sider, Content } = Layout;
const { Search } = Input;
const { SubMenu } = Menu;
class Kings extends Component {
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
  state = {
    openKeys: ['sub1'],
  };
  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };
  render() {
    return (
      <Router>
        <Layout>
          <Header style={{ backgroundColor: "#fff", height: "50px", padding: "0 20px", lineHeight: "50px", }}>
            <Search
              placeholder="搜索商品, 共有xx件款好物"
              onSearch={value => console.log(value)}
              style={{ width: 340 }}
            />
          </Header>
          <Layout style={{ borderTop: "1px solid #a1a1a1" }}>
            <Sider>
              <Menu
                style={{ width: 256, height: '90vh', overflow: 'auto', minWidth: 256 }}
                defaultOpenKeys={['sub1']}
                mode="inline"
              >
                <Menu.SubMenu key="sub1" title={
                  <span><Icon type="smile-0"></Icon>部分ui组件实战</span>
                }>
                  <Menu.Item key="sub1-1">
                    {/* /table */}
                    <Link to='/table'>表格</Link>
                  </Menu.Item>
                  <Menu.Item key="sub1-2">
                    {/* /table */}
                    <Link to="/label">标签页面</Link>
                  </Menu.Item>
                  <Menu.Item key="sub1-3">
                    {/* /table */}
                    <Link to="/post/abcdefg">文章详情</Link>
                  </Menu.Item>
                </Menu.SubMenu>
              </Menu>
            </Sider>
            <Content>
                {/* 路由 */}
                  <Route path="/recommended" component={Recommended} />
                  <Route path="/life" component={Life} />
                  <Route path="/bag" component={Bag} />
                  <Route path="/drink" component={Drink} />
                  <Route path="/clean" component={Clean} />
                  <Route path="/mum" component={Mum} />
                  <Route path="/motion" component={Motion} />
                  <Route path="/digital" component={Digital} />
                  {/* <Route path="/" component={Recommend} /> */}
                  <Redirect from="/" to="/recommended" />
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default Kings;