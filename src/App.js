import 'antd/dist/antd.css';
import './App.css';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Patientform from './Components/Patientform';
import MyPage from '../src/Components/Mypage';

function App() {
  return (
    <Router>
      <div className='App'>
        <>
          <Routes>
            <Route path='/' exact Component={MyPage} />
            <Route path='/Patient-form' Component={Patientform} />
          </Routes>
        </>
      </div>
    </Router>
  );
}

export default App;
