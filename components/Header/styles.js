import styled from 'styled-components';

export const HeaderS = styled.div`
  display: flex;
  justify-content: space-between;
  h1 {
    cursor: pointer;
    color: #33b1ff;
  }
`;
export const Checkout = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  justify-items: center;
  width: 30px;
  margin: 0 0 0 0.5em;
  a,
  .fas {
    cursor: pointer;
    text-decoration: none;
    color: #33b1ff;
  }
  a:visited {
    color: #33b1ff;
  }
`;
