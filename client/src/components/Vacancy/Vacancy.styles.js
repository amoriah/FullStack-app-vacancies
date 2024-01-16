import styled from 'styled-components';

export const Container = styled.div`
  word-wrap: break-word;
  text-align: left;
`;
export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: start;
`;

export const Title = styled.div`
  padding: 8px;
  width: 65%;
`;

export const Grade = styled.div`
  padding-top: 8px;
`;
export const Description = styled.div``;

export const Contacts = styled.div`
  margin-top: 20px;
`;

export const Tags = styled(Contacts)``;
export const VacancyButton = styled.button`
  margin-top: 10px;
  padding: 8px 18px;
  background-color: #56b4b4;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 18px;
  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    background-color: rgba(86, 180, 180, 0.91);
  }
`;

export const Svg = styled.div`
  &:hover {
    margin-left: 1px;
  }
`;
