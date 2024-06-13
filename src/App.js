import './App.css';
import Body from './components/body/body';
import Sidebar from './components/sidebar/sidebar';

function App() {
  return (
    <div className='main-container'>
      <Sidebar />
      <Body />
    </div>
  );
}

export default App;
