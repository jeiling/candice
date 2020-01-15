import styled from 'styled-components';


export const LeaderButton = styled.button`
    height: 150px;
    width: 140px;
    border-radius: 50%;
    margin: 5px;
    background: linear-gradient(to top , rgba(139, 137, 133, 0.5), rgb(223, 196, 194, 0.5));
    outline: none;
    border: none;
    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3);   
    
    :hover {
        border: 1px solid white;
    }
    @media (max-width: 1024px) {
        height: 200px;
        width: 200px;
    }
`
export const A = styled.a`
    text-decoration: none;
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.5rem;

`