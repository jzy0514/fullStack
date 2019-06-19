## render












// 构建业户界面
// 将 react 组件 渲染到页面



// classcomponent
class App extends React.component {
  render () {
    const isRed = true;
    const red = 'red';
    return (
      <div className={isRed ? red : '}> hello world 
      {
        isRed ?
        <span>red</span> : <span>nored</span>
      }
      </div>
      
    )
  }
}