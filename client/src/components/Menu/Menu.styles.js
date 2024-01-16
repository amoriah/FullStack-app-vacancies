import styled from 'styled-components';

export const Container = styled.div`
  color: white;
  font-weight: 500;
  font-size: 1.4em;
  min-height: calc(100vh - 150px);
  width: ${(props) => {
    return props.width;
  }};
  background-color: #56b4b4;

  ul {
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    text-align: center;
    cursor: pointer;

    &:hover {
      margin-left: 1px;
    }
  }
  li:first-child {
    padding-top: 0;
  }
`;
