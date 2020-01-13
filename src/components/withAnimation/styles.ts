import styled from 'styled-components';

interface IBorderWrapperProps {
    backgroundColor: string;
  }
  
  export const BorderWrapper = styled.div`
   background-color: ${({ backgroundColor }: IBorderWrapperProps) => backgroundColor};
  
  `;