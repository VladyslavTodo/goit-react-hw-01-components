import styled from '@emotion/styled';

export const FriendListUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  align-items: center;
  background-color: aliceblue;
  gap: 10px;
  & span {
    margin-right: 10px;
    background-color: ${({ isOnline }) => {
      return isOnline ? 'green' : 'red';
    }};
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }
`;
