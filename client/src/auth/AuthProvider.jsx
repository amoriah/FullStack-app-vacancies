import { useSelector } from 'react-redux';
import { sessionSelector } from '../slices/sessionSlice';
import { Navigate  } from 'react-router';

export const AuthProvider = ({ componentPage }) => {
  const { isAuth } = useSelector(sessionSelector);

  if (!isAuth) {
    return <Navigate to='/login' />;
  }

  return componentPage;
};
