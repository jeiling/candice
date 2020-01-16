import React from 'react';
import { BannerStyle, BannerText } from './styles';
import {
    useHistory,
  } from "react-router-dom";
export const  Banner: React.FunctionComponent =()=>{
    let history = useHistory();
    const goHomePage = () => {
        history.goBack();
    }

    return(
       <BannerStyle>
           <BannerText onClick={() => goHomePage()}>
               Candice cellgroup
            </BannerText>
       </BannerStyle>
    )
}