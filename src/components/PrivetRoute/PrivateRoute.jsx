import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const token = false;
  return token ? children : <Navigate to="/auth" />;
};
