import React from 'react';
import { BackgroundImage } from '../HomePage/styles' 
import { LittleParent, TopBlock } from './styles';
import { Banner } from '../../components/Banner';
const LeaderPage: React.FunctionComponent = ()=> {
    return (
        <>
            <BackgroundImage backgroundImg={'https://images.unsplash.com/photo-1515007917921-cad9bf0e2e87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'} />
            <Banner/>
            <TopBlock>
                <LittleParent Img={'https://i.pinimg.com/564x/3d/63/95/3d6395aed1079458bbd7439b1aaed729.jpg'}>
                </LittleParent>
            </TopBlock>
        </>
    )
}


export default LeaderPage;