import styled from 'styled-components';

export const Container = styled.div`
  width: ${(props) => props.width};
  display: flex;
  flex-direction: column;
  position: fixed;
  min-height: 100vh;
`;

export const Moove = styled.div`
  text-align: right;
  padding: 14px 14px;
  cursor: pointer;
  background-color: #56b4b4;
`;

export const Footer = styled.footer`
  height: 150px;
  padding: 6px;
  text-align: center;
  padding-top: 25px;
  background-color: rgba(13, 9, 13, 0.2);
  a:visited {
    color: inherit;
  }
`;
