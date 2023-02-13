import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
  const token = false;
  return token ? <Navigate to="/home" /> : children;
};
