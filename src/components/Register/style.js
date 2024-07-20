import styled from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`

export const RegisterImg = styled.img`
  height: 400px;
  width: 400px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const RegisterHeading = styled.h1`
  color: #334155;
  font-size: 35px;
  font-family: 'Roboto';
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Label = styled.label`
  color: ##7b8794;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: bold;
  margin-bottom: 5px;
`
export const Input = styled.input`
  color: #64748b;
  font-family: 'Roboto';
  border: 1px solid #cbd5e1;
  width: 350px;
  padding: 15px;
  outline: none;
  margin-bottom: 10px;
`
export const Select = styled.select`
  color: #64748b;
  font-family: 'Roboto';
  border: 1px solid #cbd5e1;
  width: 350px;
  padding: 15px;
  outline: none;
  margin-bottom: 10px;
`

export const RegisterButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  border: none;
  outline: none;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 5px;
  margin-top: 20px;
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 15px;
  font-family: 'Roboto';
`
export default RegisterContainer
