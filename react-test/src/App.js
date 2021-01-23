import Drag from './components/Drag';
import Show from './components/Show';
import "./components/index.css"
import RenderProp from './components/RenderProp';
import withMove from './components/withMove';

function DragFn(props) {
  return (<div className="drag" style={{
    left: props.left,
    top: props.top
  }}></div>)
}
function ShowFn(props){
  return (<h1>left:{props.left} top:{props.top}</h1>)
}
const D = withMove(DragFn)
const S = withMove(ShowFn)
function App() {
  return (<div>
    <Drag />
    <Show />
    <RenderProp render={state => (<h1>left:{state.left} top:{state.top}</h1>)} />
    <RenderProp render={state => (<div className="drag" style={{
      left: state.left,
      top: state.top
    }}></div>)} />
    <D/>
    <S/>
  </div>);
}

export default App;
