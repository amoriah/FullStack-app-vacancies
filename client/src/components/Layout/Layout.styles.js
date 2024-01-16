import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Content = styled.main`
  padding-left: ${(props) => props.width};
  width: 100%;
  overflow: hidden;
  overflow-y: auto;
  text-align: center;
  display: flex;
  justify-content: space-between;
`;

export const ListVacancies = styled.div`
  width: ${(props) =>
    props.open && props.halfwidth
      ? '40%'
      : !props.open && props.halfwidth
      ? '44%'
      : '100%'};
  margin-right: 4px;
`;

export const ViewVacancy = styled.div`
  margin: 10px;
  padding: 6px 18px;
  border-radius: 8px;
  background-color: white;
  width: 46%;
  position: fixed;
  right: 0;
  height: 100%;
  opacity: 1;
`;
