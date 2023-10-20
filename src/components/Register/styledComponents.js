import styled from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
  padding-bottom: 36px;
  padding-top: 0;
`
export const RegisterImage = styled.img`
  width: 356px;
`
export const RightSideForm = styled.form`
  width: 286px;
  display: flex;
  flex-direction: column;
`
export const RegisterHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 42px;
  font-weight: 600;
  color: #334155;
  margin-bottom: 12px;
`
export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;
  color: #64748b;
`
export const InputBar = styled.input`
  height: 38px;
  border: 1px solid #7b8794;
  width: 100%;
  color: #334155;
  font-family: 'Roboto';
  font-size: 14px;
  padding-left: 12px;
  outline: none;
  border-radius: 4px;
  margin-top: 8px;
  margin-bottom: 20px;
`
export const SelectBar = styled.select`
  font-family: 'Roboto';
  font-size: 14px;
  color: #334155;
  font-weight: 400;
  width: 100%;
  height: 38px;
  padding-left: 12px;
  outline: none;
  cursor: pointer;
  margin-top: 8px;
  border: 1px solid #7b8794;
  border-radius: 4px;
  margin-bottom: 20px;
`
export const OptionName = styled.option`
  font-family: 'Roboto';
  font-size: 14px;
`
export const Button = styled.button`
  margin-top: 16px;
  background-color: #3b82f6;
  color: #f1f5f9;
  border: none;
  border-radius: 6px;
  padding: 10px 20px 10px 20px;
  font-size: 14px;
  font-family: 'Roboto';
  display: flex;
  align-self: flex-start;
`
export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #ff0b37;
`
