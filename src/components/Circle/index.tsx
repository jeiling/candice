import styled, { keyframes } from 'styled-components';

const expandingBefore = keyframes`
  0% {
    opacity: 0.8;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(4);
  }
`;

const expandingAfter = keyframes`
  0% {
    opacity: 0.8;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(80);
  }
`;

export const ExpandingCircle = styled.div`
  position: relative;
  z-index: 0;

  :hover :before {
    content: '';
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: #ffffff;
    position: absolute;
    top: calc(50% - 20px);
    left: calc(50% - 20px);
    z-index: -1;
    animation: ${expandingBefore} 1000ms linear infinite forwards;
  }

  :hover :after {
    content: '';
    display: block;
    width: 2px;
    height: 2px;
    border-radius: 1px;
    background-color: rgba(255, 255, 255, 0.4);
    position: absolute;
    top: calc(50% - 1px);
    left: calc(50% - 1px);
    z-index: -1;
    animation: ${expandingAfter} 1000ms linear 500ms infinite forwards;
  }
`;
