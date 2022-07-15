import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;

  gap: 2.25rem;

  button {
    align-self: flex-end;
    margin-top: 0.5rem;
  }

  button + p {
    align-self: center;
    margin-top: -0.8rem;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.8rem;
`;

export const Text = styled.p``;
