import React from 'react';
import { AnimationWrapper } from'./styles';

export default function withAnimation<P extends object>(
    WrapperComponent: React.ComponentType<P>,
){
    return class extends React.Component<P & any, any> {
        constructor(props: any) {
            super(props);
          }
          public render(){
            return(
              <AnimationWrapper>
                <WrapperComponent {...this.props as P}/>
              </AnimationWrapper> )
              
          }
    };
}

