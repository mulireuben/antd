import 'antd/dist/antd.css';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';
import Mypage from './Components/Mainpage/Mypage';
import Patientform from './Components/Patientsform/Patientform';

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
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
