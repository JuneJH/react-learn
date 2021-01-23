import ShowInfo from './components/ShowInfo';
import ADV2 from './components/ADV2';
import ADV1 from './components/ADV1';
import ErrorBound from './components/ErrorBound';
function App() {
  return (<div>
    <ErrorBound>
      <ADV1 />
    </ErrorBound>

    <ADV2 />
    <ShowInfo />
  </div>);
}

export default App;
