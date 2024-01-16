import styled from 'styled-components';

export const Container = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  margin: auto;
  padding: 40px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;

export const Label = styled.label`
  padding: 30px 0 2px 0;
  &:first-child {
    padding-top: 0;
  }
`;

export const Input = styled.input`
  width: 500px;
  height: 25px;
  border: 1px solid grey;
  border-radius: 6px;
  padding: 6px 8px;
`;

export const Textarea = styled.textarea`
  width: 500px;
  height: 150px;
  border-radius: 6px;
  padding: 6px 8px;
`;

export const Select = styled.select`
  width: 250px;
  height: 40px;
  border-radius: 6px;
`;

export const MultipleSelect = styled(Select)`
  width: 250px;
  height: auto;
  border-radius: 6px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

export const Button = styled.button`
  box-sizing: border-box;
  margin-top: 50px;
  margin-left: 30px;
  padding: 8px 18px;
  background-color: #56b4b4;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 18px;

  &:hover {
    background-color: rgba(86, 180, 180, 0.91);
  }
`;
