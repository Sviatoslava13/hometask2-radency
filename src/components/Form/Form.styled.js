import styled from "styled-components";
export const ContainerForm = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const Forma = styled.form`
  background-color: #fff;
  width: 50%;
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  width: 95%;
  height: 30px;
  margin-top: 10px;
`;
export const Label = styled.label`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Textarea = styled.textarea`
  margin-top: 10px;
  width: 95%;
`;
export const ButtonSubmit = styled.button`
  margin: 10px auto 0 auto;
  width: 60%;
  padding: 10px 20px;

  background-color: white;
  border: 2px solid green;
`;
export const ButtonReset = styled.button`
  margin: 10px auto 0 auto;
  width: 60%;
  padding: 10px 20px;

  background-color: white;
  border: 2px solid red;
`;
export const Select = styled.select`
  margin-top: 10px;
  width: 95%;
  height: 30px;
`;
