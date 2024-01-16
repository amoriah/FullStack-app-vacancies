import { useCallback } from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import * as Style from './Layout.styles';
import { useDispatch, useSelector } from 'react-redux';
import { mooveBar, sideBarSelector } from '../../slices/sideBarSlice';

export const Layout = ({ content, vacancy }) => {
  const dispatch = useDispatch();
  const { width, open } = useSelector(sideBarSelector);

  const closeSidebar = useCallback(() => {
    dispatch(mooveBar());
  }, [dispatch]);

  return (
    <Style.Container>
      <Sidebar closeSidebar={closeSidebar} />
      <Style.Content width={width}>
        <Style.ListVacancies halfwidth={vacancy ? 'true' : ''} open={open}>
          {content}
        </Style.ListVacancies>
        {!!vacancy ? <Style.ViewVacancy>{vacancy}</Style.ViewVacancy> : null}
      </Style.Content>
    </Style.Container>
  );
};
