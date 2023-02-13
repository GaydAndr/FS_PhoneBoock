// import logo from './logo.svg';
// import './App.css';

import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { Page404 } from '../pages/Page404/Page404';
import { Layout } from './Layout/Layuot';
import { PrivateRoute } from './PrivetRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/auth"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/auth"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  );
};
