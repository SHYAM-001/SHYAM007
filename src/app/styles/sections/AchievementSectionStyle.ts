import styled from "styled-components";

export const AchievementContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  padding: 80px 30px;
  z-inex: 1;

  @media screen and (max-width: 960px) {
    padding: 66px 16px;
  }

  @media screen and (max-width: 640px) {
    padding: 32px 16px;
  }
`;

export const Description = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const AchievementInnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 80px 30px;
  width: 100%;
  height: 100vh;
  z-index: 1;

  @media screen and (max-width: 960px) {
    padding: 66px 16px;
    height: 80vh;
  }

  @media screen and (max-width: 640px) {
    padding: 32px 16px;
    height: 60vh;
  }
`;

export const CanvasWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute; /* Allows it to fill parent container */
`;

export const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const UIDescription = styled.div`
  padding: 4px;
  font-size: 32px;
  font-weight:600;
  color: ${({theme}) => theme.text_secondary};
  text-align: center;
  margin-top: 40rem;  

  @media (max-width: 768px) {
    font-size: 16px;
    margin-top:23rem;
  }
`;
