import React from 'react';
import { BackgroundImage, ContainerWrapper, Block, RightTop, RightBottom, Right } from './styles';
import { LeadersButtons } from '../../components/LeadersButtons';
import { Banner } from '../../components/Banner'
class HomePage extends React.Component {
  constructor(props: any){
    super(props);
  }

  public render(){
    return (
      <>
        <BackgroundImage backgroundImg={'https://images.unsplash.com/photo-1518691340140-512e66ce957b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1346&q=80'}/>
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
              </RightBottom>
            </Right>
          </Block>
        </ContainerWrapper>
      </>
    );
    }
  }

export default HomePage;