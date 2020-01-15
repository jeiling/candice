import styled, { css, keyframes } from 'styled-components';
 
const moving = keyframes`
    0% {
      transform: translateY(0%);
    }
    50% {
      transform: translateY(-10%);
    }
    100% {
      transform: translateY(0%);
    }
  `

  export const AnimationWrapper = styled.div`
    :hover {
      animation: ${moving} 0.7s 1;
    }
  `;

  