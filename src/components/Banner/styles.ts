import styled, { keyframes } from 'styled-components';

export const BannerStyle = styled.div`
    width: 100%;
    height: 10%;
    opacity: 0.8;
    color: black;
    text-align: center;
`
const textMoving = keyframes`
    0%{
        text-shadow: 5px 5px rgba(0, 0, 0, 0.4);
    }
    100%{
        text-shadow: 7px 7px rgba(0, 0, 0, 0.4);
    }
`
export const BannerText = styled.button`
    font-family: fantasy;
    font-size: 4rem;
    padding: 3rem;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;

    :hover {
        animation: ${textMoving} .3s forwards;
    }
`