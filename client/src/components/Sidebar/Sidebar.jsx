import { useSelector } from 'react-redux';
import { Container, Footer, Moove } from './Sidebar.styles';
import { sideBarSelector } from '../../slices/sideBarSlice';
import { ArrowRight } from '../../svg/ArrowRight';
import { ArrowLeft } from '../../svg/ArrowLeft';
import { Github } from '../../svg/GithubSvg';
import { Menu } from '../Menu/Menu';

export const Sidebar = ({ closeSidebar }) => {
  const { width, open } = useSelector(sideBarSelector);
  const gitLink = (child) => (
    <a href='https://github.com/amoriah' target='_blank' rel='noreferrer'>
      {child}
    </a>
  );

  return (
    <Container width={width}>
      <Moove onClick={closeSidebar}>
        {open ? <ArrowLeft /> : <ArrowRight />}
      </Moove>
      <Menu open={open} />
      <Footer>
        {open ? (
          <>Project for School 21 ©2023 Created by {gitLink('amoriah')}</>
        ) : (
          gitLink(<Github />)
        )}
      </Footer>
    </Container>
  );
};
