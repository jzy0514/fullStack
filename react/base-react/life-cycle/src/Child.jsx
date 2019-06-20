import React from 'react';

class Child extends React.Component {
  state = {
    childCount: 0
  }
  handleChildCountChange = () => {
    let { childCount } = this.state;
    childCount ++;
    this.setState({
      childCount
    })
  }
  componentWillMount() {
    console.log('commponentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
    this.interval = setInterval(() => {
      console.log('child interval');
    }, 1000)
  }
  // props 更新
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
    
  }
  // 组件 性能优化的时候需要的 终止不必要的更新
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');  
    if (nextProps.count !== this.props.count) {
      return true;
    }
    return true;
  }
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.interval);
  }
  render() {
    const { count } = this.props;
    const { childCount } = this.state;
    console.log(' render function');
    return (
      <div>
        <button onClick={this.handleChildCountChange}>
          child state change
        </button>
        Child Component
        count: { count } 
        childCount: { childCount }
      </div>
    )
  }
}
export default Child;