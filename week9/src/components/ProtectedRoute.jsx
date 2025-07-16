import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { auth, loading } = useContext(AuthContext);
  if (loading) return null; // or a loading spinner
  if (!auth) return <Navigate to="/login" replace />;
  return children;
} 