import styled from "styled-components";

interface ProjectSectionProps {
  active?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 16px 0;
  z-index: 1;
  align-items: center;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
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

export const Description = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 400;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  cursor: pointer;
  margin: 22px 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ToggleButton = styled.div<ProjectSectionProps>`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;

  background: ${({ active, theme }) =>
    active ? theme.primary + "20" : "transparent"};

  &:hover {
    background: ${({ theme }) => theme.primary + "40"};
  }

  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
`;

export const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;
