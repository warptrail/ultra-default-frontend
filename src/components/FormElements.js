import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: #151615;
  height: 90vh;
  width: 90%;
  margin: auto;
`;

export const FormH1 = styled.h1`
  font-size: 25px;
  color: plum;
  text-align: center;
  margin-top: 24px;
`;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: none;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: black; */
  /* text-align: center; */
  width: 80%;
  margin: 0 auto;
  margin-top: ${({ extraMargin }) => (extraMargin ? '50px' : '0px')};
  padding: 20px;
`;
export const Label = styled.label`
  font-size: 22px;
  margin-bottom: 15px;
`;

export const TextInput = styled.input`
  height: 2.5em;
  padding: 0 4px;
  max-width: 300px;
  background-color: #282a28;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  border: none;
  transition: outline 0.3s ease;

  &:focus {
    border: none;
    outline: 3px dotted #7e2d88;
  }

  &:active {
    border: none;
    outline: 7px dotted #7e2d88;
  }
`;

export const SubmitButton = styled.input`
  max-width: 200px;
  margin: 0 auto;
  padding: 10px 40px;
  font-size: 22px;
  background-color: purple;
  border: none;
  box-shadow: none;
  color: #fff;
  font-weight: 700;
  transition: all 0.4s ease-in;
  cursor: pointer;

  &:hover {
    background-color: #212221;
    color: #800080;
  }
`;
