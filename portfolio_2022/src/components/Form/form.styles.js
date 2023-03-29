import styled from 'styled-components';

export const FormBlock = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 4rem;
  // background-color: #edf1f9;
`;

export const FormWrapper = styled.div``;

export const Input = styled.input`
  min-height: 5.6rem;
  margin-bottom: 1.6rem;
  padding-left: 5.2rem;
  border: 1px solid #dde3e4;
  color: #485b60;
  font-size: 1.6rem;
  line-height: 2.4rem;
  display: block;
  width: 100%;
  height: 3.8rem;
  padding: 0.8rem 1.2rem;
  vertical-align: middle;
  background-color: #ffffff;
  font: inherit;

  :hover {
    border-color: #b4bbbd;
  }

  :focus {
    border-color: #26534c;
    outline: 0;
  }
`;

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  vertical-align: middle;
  background-color: #ffffff;
  min-height: 14.8rem;
  margin-bottom: 1.6rem;
  padding: 1.6rem;
  border: 1px solid #dde3e4;
  color: #485b60;
  font-size: 1.6rem;
  line-height: 2.4rem;
  font: inherit;

  :hover {
    border-color: #b4bbbd;
  }

  :focus {
    border-color: #26534c;
    outline: 0;
  }
`;

export const FormButtonWrapper = styled.div`
  display: flex;
  margin-top: 3.2rem;
  justify-content: center;
  align-items: center;
`;

export const SubmitButton = styled.button`
  display: flex;
  min-height: 4.8rem;
  padding: 1.2rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid #eff1f5;
  background-color: #eea1be;
  transition: background-color 300ms ease;
  font-family: 'Averta', sans-serif;
  color: #18033c;
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  border-radius: 0;

  :hover {
    background-color: #1c3f3a;
  }
`;

export const FormSuccessMessage = styled.div`
  background-color: #53847d;
  color: #fff;
  padding: 2rem;
  text-align: center;
`;

export const FormFailureMessage = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: #ffdede;
`;
