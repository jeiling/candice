import styled, { keyframes } from 'styled-components';

export interface IBackgroundImage {
    backgroundImg: string;
}
export const BackgroundImage = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${({backgroundImg}:IBackgroundImage) => backgroundImg})
`;

export const ContainerWrapper = styled.div`
`;

export const Block = styled.div`
    height: 500px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-top: 10%;
    
    @media (max-width: 1024px) {
        justify-content: center;
    }
`
const colorRendering = keyframes`
    0% {
        background-color: rgba(255, 255, 255, 0);
        box-shadow: 3px 3px rgba(0, 0, 0, 0.1);
    }
    50% {
        background-color: rgba(255, 255, 255, 0.2);
        box-shadow: 4px 4px rgba(0, 0, 0, 0.2);
    }
    75% {
        background-color: rgba(255, 255, 255, 0.4);
        box-shadow: 6px 6px rgba(0, 0, 0, 0.3);
    }
    100% {
        background-color: rgba(255, 255, 255, 0.6);
        box-shadow: 7px 7px rgba(0, 0, 0, 0.4);
    }
  `

const imgMoving = keyframes`
    0% {
        margin-right: 70%;
    }
    100% {
        margin-right: 40%;
    }
`

export const Left = styled.div`
    height: 500px;
    width: 600px;
    background-color: darkcyan;
    display: flex;
    animation: ${imgMoving} 1s forwards;
    background: url('https://i.pinimg.com/564x/52/da/1e/52da1ea0ba8fc63019506095cc36f31c.jpg');
    border-radius: 10px;
    z-index: 2px;

    @media (max-width: 1024px) {
        margin-right: 0;
    }

`
export const Right = styled.div`
    position: absolute;
    height: 500px;
    width: 600px;
    right: 5%;
    flex-direction: column;
    display: flex;
    border-radius: 10px;
    border: 2px rgba(255, 255, 255, 0.3) solid;
    z-index: 3;

    :hover{
        animation: ${colorRendering} .6s 1 forwards;
    }

    @media (max-width: 1024px) {
        margin-right: 0;
        background-color: rgba(255, 255, 255, 0);
    }
`

export const RightTop = styled.div`
    height: 65%;
    padding: 1rem;
`
export const RightBottom = styled.div`
    height: 35%;
`