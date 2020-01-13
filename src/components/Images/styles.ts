import styled from 'styled-components';

export const Image = styled.img`
    height: 150px;
    width: 140px;
    border-radius: 50%;
    object-fit: cover;
    margin: 5px;

    @media (max-width: 1024px) {
        height: 200px;
        width: 200px;
    }
    
`

export const ImageWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
    }
`