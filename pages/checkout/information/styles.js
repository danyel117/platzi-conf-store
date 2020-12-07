import styled from 'styled-components';

export const InformationS = styled.div`
  grid-template-columns: 3fr 1fr;
  grid-gap: 2rem;
  grid-row-gap: 1.5em;
  display: grid;
  margin: 0 0 4em 0;
  button {
    box-shadow: inset 0px 1px 0px 0px #bee2f9;
    background: linear-gradient(to bottom, #63b8ee 5%, #468ccf 100%);
    background-color: #63b8ee;
    border-radius: 6px;
    border: 1px solid #3866a3;
    display: inline-block;
    cursor: pointer;
    color: #14396a;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 6px 24px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #7cacde;
    width: 100%;
    display: block;
    outline: none;
  }
`;

export const Input = styled.input`
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  color: rgba(0, 0, 0, 0.75);
  display: inline-block;
  font-feature-settings: 'tnum';
  font-size: 14px;
  height: 32px;
  line-height: 32px;
  list-style: none;
  margin: 0 0 8px 0;
  outline: 0;
  padding: 4px 12px;
  width: 100%;
  box-sizing: border-box;
`;

export const InformationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 0;
  div {
    margin: 10px 0 0 0;
  }
`;

export const InformationSidebar = styled.div`
  margin: 10px 0 0 0;
`;

export const InformationItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  .fas {
    margin: 0 0 0 10px;
    color: rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
`;

export const InformationElement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #eee;
`;

export const H2 = styled.h2`
  margin: 0 0 8px 0;
  padding: 0;
`;

export const H3 = styled.h3`
  font-size: 18px;
  margin: 0 0 8px 0;
  padding: 0;
`;

export const H4 = styled.h4`
  margin: 0;
`;
