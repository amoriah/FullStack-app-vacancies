import { useNavigate } from 'react-router-dom';
import { Container } from './Menu.styles';
import { menuItems } from '../../svg/Menu';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { sessionSelector } from '../../slices/sessionSlice';
import { closeViewCard } from '../../slices/cardViewSlice';
import { sideBarSelector } from '../../slices/sideBarSlice';

export const Menu = () => {
  const { open } = useSelector(sideBarSelector);
  const { type } = useSelector(sessionSelector);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goLink = (url) => {
    dispatch(closeViewCard());
    navigate(url);
  };

  const items = menuItems
    .filter((e) => e.permission === type || e.permission === 'all')
    .map((item, i) => {
      return (
        <li key={nanoid()} onClick={item.url && (() => goLink(item.url))}>
          {item.svg}
          {open && item.title}
        </li>
      );
    });

  return (
    <Container>
      <ul>{items}</ul>
    </Container>
  );
};
