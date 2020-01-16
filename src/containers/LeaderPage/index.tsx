import React, { useState } from 'react';
import { BackgroundImage } from '../HomePage/styles' 
import { LittleParent, TopBlock } from './styles';
import { Banner } from '../../components/Banner';
import { useParams } from 'react-router-dom';
import { leadersImgs } from '../../common/leadersInfo';

const LeaderPage : React.FunctionComponent = () =>  {
    const { id } = useParams<{id: string}>();
        return (
            <>
                <BackgroundImage backgroundImg = {'https://images.unsplash.com/photo-1452827073306-6e6e661baf57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80'} />
                <Banner/>
                <TopBlock>
                    <LittleParent Img={leadersImgs[id]}>
                    </LittleParent>
                </TopBlock>
            </>
        )
}


export default LeaderPage;