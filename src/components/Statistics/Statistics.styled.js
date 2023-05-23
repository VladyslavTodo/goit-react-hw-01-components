import styled from '@emotion/styled';

export const Card = styled.section`
  background-color: rgb(195, 255, 235);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 40px;
`;

export const Title = styled.section`
  font-size: 32px;
  font-style: italic;
  align-items: center;
  text-align: center;
  margin-bottom: 12px;
`;

export const StatList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const Item = styled.li`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 30px;
  gap: 10px;
  border-radius: 8px;
  padding: 20px;
  background-color: rgb(217, 255, 242);
  font-size: 20px;
  width: 80px;
  background-color: ${({color}) => {
    return color
  }};
`;
