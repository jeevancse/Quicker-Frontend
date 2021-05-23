import styled, { createGlobalStyle } from 'styled-components';

export const ToasterGlobalStyles = createGlobalStyle`
  /* toaster */
  .Toastify__toast-body.Toastify__toast--error, .Toastify__toast-body.Toastify__toast--success {
    padding: 0;
    margin: 0;
    background-color: #fff;
  }

  .Toastify__toast--error {
    background: #fff;   
    color: #475359;
    // border: 1px solid #e4514e;
    box-shadow: 0px 0px 8px rgba(131, 146, 168, 0.2);
    border-radius: 8px;
  }

  .Toastify__toast--success {
    background: #fff;
    color: #475359;
    border: 1px solid #36C181;
    box-sizing: border-box;
    box-shadow: 0px 0px 8px rgba(131, 146, 168, 0.2);
    border-radius: 8px;
  }

  .Toastify__toast--success.Toastify__toast, .Toastify__toast--error.Toastify__toast {
    padding: 0;
  }

  .Toastify__toast--success  .Toastify__close-button, .Toastify__toast--error  .Toastify__close-button {
    color: #475359;
    margin: 12px 10px 0 0;
  }
`;


export const InfoComponent = styled.div`
  padding: 12px;
  display: flex;
  img {
    padding-right: 10px;
  }
`;

export const ErrorContent = styled.div`
  padding-top: 8px;
`;

export const SuccessContent = styled.div`
  padding-top: 8px;
`;