import styled from 'styled-components';


export const TopBlock = styled.div`
    height: 20rem;
    display: flex;
    justify-content: center;
`

export interface ILittleParent {
    Img: string
}
export const LittleParent = styled.img`
    width: 20rem;
    height: 20rem;
    background-image: url(${({Img}:ILittleParent) => Img});
`