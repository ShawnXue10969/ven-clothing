import styled from 'styled-components';
import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
  width: 100%;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
`;

export const FormContainer = styled.form`
  height: 100px;
  width: 100%;
  min-width: 500px;
`;
export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 50px;
`;
