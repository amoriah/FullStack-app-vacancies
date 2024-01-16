import styled from 'styled-components';

export const Container = styled.div`
  padding: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Form = styled.form`
  padding: 2em;
  display: flex;
  border-radius: 8px;
  flex-direction: column;
  background-color: white;
`;
export const Label = styled.label`
  padding: 30px 0px 2px 0;
  font-size: 18px;

  &:first-child {
    padding-top: 15px;
  }
`;
export const Input = styled.input`
  width: 200px;
  height: 20px;
  padding: 0.3em;
  border: 1px solid grey;
  border-radius: 6px;
  padding: 6px 8px;
`;

export const AccountDiv = styled.div`
  color: inherit;
  a:visited {
    color: inherit;
  }
`;

export const ButtonFlex = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const Button = styled.button`
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

export const ChooseBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ChooseButtons = styled.div`
  padding: 6px;
`;

export const TypeButton = styled.button`
  border: none;
  background-color: white;
  text-decoration: ${(props) => (props.underline ? 'underline' : 'none')};
  font-size: ${(props) => (props.underline ? '1.1em' : 'auto')};
`;
