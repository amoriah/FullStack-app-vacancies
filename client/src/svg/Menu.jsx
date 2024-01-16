import { LogoutSvg } from './LogoutSvg';
import { VacanciesSvg } from './VacanciesSvg';
import { VacancySvg } from './VacancySvg';
import { CreateSvg } from './CreateSvg';
import { Active } from './ActiveSvg';

export const menuItems = [
  {
    svg: <VacanciesSvg />,
    title: 'Vacancies',
    permission: 'all',
    url: '/vacancies',
  },
  {
    svg: <VacancySvg />,
    title: 'My vacancies',
    permission: 'user',
    url: '/my-vacancies',
  },
  {
    svg: <Active />,
    title: 'Active vacancies',
    permission: 'company',
    url: '/active_vacancies',
  },
  {
    svg: <CreateSvg />,
    title: 'Create vacancy',
    permission: 'company',
    url: '/create-vacancy',
  },
  {
    svg: <LogoutSvg />,
    title: 'Logout',
    permission: 'all',
  },
];
