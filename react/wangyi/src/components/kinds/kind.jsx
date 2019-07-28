import React, { Component } from 'react';
import { Layout, Input, Menu } from 'antd';
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
      <div>
        <Layout>
          <Header style={{backgroundColor: "#fff", height: "50px", padding: "0 20px", lineHeight: "50px", }}>
            <Search
              placeholder="搜索商品, 共有xx件款好物"
              onSearch={value => console.log(value)}
              style={{ width: 340 }}
            />
          </Header>
          <Layout style={{borderTop: "1px solid #a1a1a1"}}>
            <Sider
            className="sider"
            width= "88"
            style={{backgroundColor: "#fff"}}>
              <ul>
                <li className="text">
                  <a href="">推荐专区</a>
                </li>
                <li className="text">
                  <a href="">居家生活</a>
                </li>
                <li className="text">
                  <a href="">居家生活</a>
                </li>
                <li className="text">
                  <a href="">服饰鞋包</a>
                </li>
                <li className="text">
                  <a href="">美食酒水</a>
                </li>
                <li className="text">
                  <a href="">个户清洁</a>
                </li>
                <li className="text">
                  <a href="">母婴亲子</a>
                </li>
                <li className="text">
                  <a href="">运动旅行</a>
                </li>
                <li className="text">
                  <a href="">数码家电</a>
                </li>
                <li className="text">
                  <a href="">全球特色</a>
                </li>
              </ul>
            </Sider>
            <Content>Content</Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}
 
export default Kings;