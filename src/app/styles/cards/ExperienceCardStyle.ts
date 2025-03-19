import styled from "styled-components";

export const Top = styled.div`
  display: flex;
  max-width: 100%;
  gap: 12px;
`;

export const Image = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;

  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Role = styled.div`
  font-size: 18px;
  font-weight: 600px;
  color: ${({ theme }) => theme.text_primary + 90};

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Company = styled.div`
  font-size: 14px;
  font-weight: 500px;
  color: ${({ theme }) => theme.text_secondary + 99};

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Date = styled.div`
  font-size: 12px;
  font-weight: 400px;
  color: ${({ theme }) => theme.text_secondary + 99};

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

export const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Skills = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: -10px;
`;

export const Span = styled.div`
  display: -webkit-box;
  max-width: 100%;
`;

export const Skill = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
