import React from 'react';
import { BorderWrapper } from'./styles';

export default function withAnimation<P extends object>(
    WrapperComponent: React.ComponentType<P>,
    originClassName: string,
    borderColor: string
){
    return class extends React.Component<P & any, any> {
        constructor(props: any) {
            super(props);
          }
          public render(){
            return(
              <BorderWrapper backgroundColor={borderColor}>
                <WrapperComponent {...this.props as P}/>
              </BorderWrapper> )
              
          }
    };
}

