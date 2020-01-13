import React from 'react';
import { BackgroundImage, ContainerWrapper, Block, RightTop, RightBottom, Right } from './styles';
import { Images } from '../components/Images';
import { Banner } from '../components/Banner'
import withAnimation from '../components/withAnimation';

const AddingBorder = withAnimation(Images,'Border','white');
const HomePage: React.FunctionComponent = ()=> {
      return (
        <>
        <BackgroundImage />
        <ContainerWrapper>
          <Banner/>
          <Block>
            <Right>
              <RightTop>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, aut voluptate voluptas vero omnis dolorum. Illo commodi tenetur cupiditate optio quidem libero quaerat quo, vero sapiente ea aspernatur dolores ducimus?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, aut voluptate voluptas vero omnis dolorum. Illo commodi tenetur cupiditate optio quidem libero quaerat quo, vero sapiente ea aspernatur dolores ducimus?</p>
              </RightTop>
              <RightBottom>
                <Images/>
              </RightBottom>
            </Right>
          </Block>
        </ContainerWrapper>
        </>
      );
  }

export default HomePage;