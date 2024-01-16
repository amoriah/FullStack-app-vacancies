import views from '../views';

export const access = [
  {
    page: 'vacancies',
    component: <views.MainPage />,
    userPermision: true,
    companyPermition: true,
    commonPermition: false,
  },
  {
    page: 'myVacancies',
    component: <views.MyVacancies />,
    userPermision: true,
    companyPermition: false,
    commonPermition: false,
  },
  {
    page: 'activeVacancies',
    component: <views.ActiveVacancies />,
    userPermision: false,
    companyPermition: true,
    commonPermition: false,
  },
  {
    page: 'createVacancy',
    component: <views.CreateVacancy />,
    userPermision: false,
    companyPermition: true,
    commonPermition: false,
  },
  {
    page: 'login',
    component: <views.Login />,
    userPermision: true,
    companyPermition: true,
    commonPermition: true,
  },
  {
    page: 'signup ',
    component: <views.Signup />,
    userPermision: true,
    companyPermition: true,
    commonPermition: true,
  },
];
