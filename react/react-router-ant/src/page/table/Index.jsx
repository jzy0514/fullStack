import React, { Component } from 'react';
import { Table } from "antd";

function Message(props) {
  const { msg } = props; //props
  const { time } = msg; // msg
  return (
    <li>
      { time }
    </li>
  )
}
const data = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="#">{text}</a>
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '操作',
    key: 'key',
    render: (text, record) => {
      return (
        <div>
          <a href="#">+</a>
          <a href="#">-</a>
          正在操作的 key: { record.key }
        </div>
      )
    }
  }
];

class Index extends Component {
  state = {
    msgs: [
      {
        time: '2017-6-18'
      },
      {
        tiem: '2018-7-19'
      }
    ]
  }
  // 每隔 3s放一个时间进去
  handlePushTime = () => {
    const date = new Date();
    const dateLocal = date.toLocaleTimeString();
    const msgs = this.state.msgs.slice(0);
    this.setState({
      msgs: msgs.concat({ time: dateLocal })
    })
  }
  componentDidMount() {
    setInterval(() => {
      this.handlePushTime();
    }, 3000)
  }
  render() { 
    const { location } = this.props;
    const { msgs } = this.state;
    return (
      <div>
        { location.search }
        {
          msgs.map((msg, i) => {
            return (
              <Message key={i} msg={msg}></Message>
            )
          })
        }
        <Table dataSource={data} columns={columns}></Table>
      </div>
    )
  }
}
 
export default Index;