import styled from 'styled-components';

export const PaymentS = styled.div`
  grid-template-columns: 3fr;
  grid-gap: 2rem;
  grid-row-gap: 1.5em;
  display: grid;
  margin-bottom:10px;
`;

export const PaymentBack = styled.div`
  margin: 10px 0 0 0;
`;

export const PaymentItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .fas {
    margin: 0 0 0 10px;
    color: rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
  button {
    background-color: transparent;
    border: none;
    outline: none;
  }
`;

export const PaymentElement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #eee;
  h4 {
    margin: 0;
  }
`;
