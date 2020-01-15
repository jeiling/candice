import React from 'react';
import { BackgroundImage, ContainerWrapper } from './styles';
import { Banner } from '../components/Banner'
import withAnimation from '../components/withAnimation';
import HomePage from './HomePage';

const Root: React.FunctionComponent = ()=> {
      return (
        <>
        <BackgroundImage />
        <ContainerWrapper>
          <Banner/>
          <HomePage/>
        </ContainerWrapper>
        </>
      );
  }

export default HomePage;