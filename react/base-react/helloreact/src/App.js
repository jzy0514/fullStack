import React from 'react';
import logo from './logo.svg';
import Child from './Child';
import './App.css';
// PureComponent 
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// classComponent
class App extends React.Component {
  state = {
    msg: 'from state'
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        msg: 'change msg'
      })
    }, 3000)
  }
  renderFooter = () => {
    return (
      <footer>
        foot
      </footer>
    )
  }
  render() {
    const { msg } = this.state;
    const isRed = true;
    const red = 'red';
    const Main = (<p>main</p>);
    const lists = [1, 2, 3, 4, 5];
    const listsNode = lists
    .map((list, index) => <li key={index}>{list}</li>);
    return (
      <div className={isRed ? red : ''}> hello world 
      <Child msg={msg} />
      {
        msg + '123'
      }
      {
        isRed ?
        <span>red</span> : <span>nored</span>
      }
      {
        listsNode
      }
      <ul>
        {
          lists.map((list, index) => <li key={index}>{list}</li>)
        }
        </ul>
      {
        Main
      }
      {this.renderFooter()}
      </div>
    )
  }
}
export default App;
