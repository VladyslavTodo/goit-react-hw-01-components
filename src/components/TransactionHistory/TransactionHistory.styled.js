import styled from '@emotion/styled';

export const Table = styled.table`
  margin: 0 auto;
  width: 500px;
  border-collapse: collapse;
  border-radius: 10px;
  overflow: hidden;
  background-color: #797979;
  box-shadow: inset 1px 1px 0 #999999, inset 0 -1px 0 #999999;
`;

export const TableTh = styled.tr`
  height: 30px;
  font-size: 24px;
  background-color: #000000;
  text-align: center;
  color: white;
  th {
    padding: 12px;
    width: 33.3333%;
    :not(:last-child) {
      border-right: 2px solid #cccccc;
    }
  }
`;

export const TableTd = styled.tr`
  height: 30px;
  font-size: 20px;
  text-align: center;
  text-transform: capitalize;
  &:nth-of-type(even) {
    background-color: #bfbfbf;
  }
  td {
    padding: 5px;
    :not(:last-child) {
      border-right: 2px solid #000000;
    }
  }
`;
