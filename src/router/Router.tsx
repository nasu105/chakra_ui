import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../components/pages/Home';
import { Login } from '../components/pages/Login';
import { Page404 } from '../components/pages/Page404';
import { Setting } from '../components/pages/Setting';
import { UserManagement } from '../components/pages/UserManagement';
import { HeaderLayout } from '../components/templates/HeaderLayout';

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Page404></Page404>,
    children: [
      { index: true, element: <Login></Login> },
    ]
  },
  {
    path: "home",
    element: <HeaderLayout />,
    children: [
      { index: true, element: <Home></Home> },
      { path: "user_management", element: <UserManagement></UserManagement> },
      { path: "setting", element: <Setting></Setting> },
    ]
  }
])
