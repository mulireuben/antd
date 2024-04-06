import 'antd/dist/antd.css';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';
import Mypage from './Components/Mainpage/Mypage';
import Patientform from './Components/Patientsform/Patientform';
import Praco from './Components/Praco/Praco';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Mypage />,
      },
      {
        path: 'patientform',
        element: <Patientform />,
      },
      {
        path: 'Praco',
        element: <Praco />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
