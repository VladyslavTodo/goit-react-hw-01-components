import styled from '@emotion/styled';

export const Card = styled.div`
  text-align: center;
  font-size: 18px;
  background-color: antiquewhite;
  padding: 20px;
  width: 300px;
  border-radius: 8px;
  font-weight: 500;
  margin-bottom: 30px;
`;

export const Description = styled.div`
  margin-bottom: 20px;
`;

export const Img = styled.img`
  width: 70%;
  height: auto;
  display: block;
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const Name = styled.p`
  margin-bottom: 10px;
  font-size: 32px;
`;

export const Tag = styled.p`
  margin-bottom: 10px;
  font-size: 16px;
  color: #676767;
`;

export const Location = styled.p`
  margin-bottom: 10px;
  font-size: 16px;
  color: #676767;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const StatsList = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
