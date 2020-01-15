import React from 'react';
import { BackgroundImage, ContainerWrapper, Block, RightTop, RightBottom, Right } from './styles';
import { LeadersButtons } from '../../components/LeadersButtons';
import { Banner } from '../../components/Banner'
import { BrowserRouter, Route } from 'react-router-dom';
import { Members } from '../Members';
const HomePage: React.FunctionComponent = ()=> {
      return (
        <>
        <BrowserRouter>
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
                  <LeadersButtons/>
                  <Route path='/chef' component={Members} />
                  <Route path='/cat' component={Members} />
                </RightBottom>
              </Right>
            </Block>
          </ContainerWrapper>
        </BrowserRouter>
        </>
      );
  }

export default HomePage;