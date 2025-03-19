import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  bottom: 0;
  width: 100%;
  background-color: rgba(17, 25, 40, 0.83);
  z-index: 1;
  gap: 1rem;
  padding: 13px;

  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 10px 20px; 
  }
`;

export const FooterWrapper = styled.div`
  text-align: center;
  flex-grow: 1; /* Helps center the text */
  
  @media (max-width: 768px) {
    flex-grow: unset; 
  }
`;

export const ResetButton = styled.a`
  position: absolute;
  right: 90px; 
  border: 1px solid ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary};
  padding: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }

  @media (max-width: 768px) {
    position: static; 
    margin-left: auto; 
  }
`;
