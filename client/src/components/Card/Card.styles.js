import styled from 'styled-components';

export const Container = styled.div`
  margin: 10px;
  padding: 6px 18px;
  border-radius: 8px;
  background-color: white;
  transition: background-color 0.1s;
  &:hover {
    background-color: rgba(13, 9, 13, 0.1);
  }
`;

export const IconBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const Title = styled.h3`
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Description = styled.p`
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
