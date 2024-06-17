import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Body from './components/body/Body';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';

function App() {
  return (
    <Router>
      <div className='main-container'>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route
            path='/'
            element={
              <>
                <Sidebar />
                <Body />
              </>
            }
          />

          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
