import styled from 'styled-components';

export const BackgroundImage = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('https://images.unsplash.com/photo-1518691340140-512e66ce957b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1346&q=80');
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

export const Right = styled.div`
    height: 500px;
    width: 600px;
    margin-right: 5%;
    flex-direction: column;
    display: flex;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.5);

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