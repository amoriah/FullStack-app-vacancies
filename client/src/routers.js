import { Navigate } from 'react-router-dom';
import views from './views/index';
import { AuthProvider } from './auth/AuthProvider';

const routers = [
  {
    path: '/',
    element: <Navigate to='/vacancies' />,
  },
  {
    path: '/vacancies',
    element: <AuthProvider componentPage={<views.MainPage />} />,
  },
  {
    path: '/my-vacancies',
    element: <AuthProvider componentPage={<views.MyVacancies />} />,
  },
  {
    path: '/active_vacancies',
    element: <AuthProvider componentPage={<views.ActiveVacancies />} />,
  },
  {
    path: '/create-vacancy',
    element: <AuthProvider componentPage={<views.CreateVacancy />} />,
  },
  {
    path: '/login',
    element: <views.Login />,
  },
  {
    path: '/signup',
    element: <views.Signup />,
  },
];

export default routers;
