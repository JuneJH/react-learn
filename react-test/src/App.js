let event = null;
function App() {
  return (<div onClick={e => {
    console.log("内置React组件div点击事件触发")
    console.log("react事件对象是否重用",e === event)
  }}>
    <button onClick={(e) => {
      console.log("内置组件button点击事件触发")
      console.log("真实事件对象",e.nativeEvent)
     event = e;
    }}>
      点击事件
          </button>
  </div>);
}


export default App;
