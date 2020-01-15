import styled from 'styled-components';

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
    }
`