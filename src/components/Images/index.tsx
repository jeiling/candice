import React from 'react';
import { Image, ImageWrapper } from './styles'

const urls = ['https://i.pinimg.com/564x/ab/ba/16/abba167a50dc5873eba47c5c989e9a2d.jpg', 'https://i.pinimg.com/564x/ab/ba/16/abba167a50dc5873eba47c5c989e9a2d.jpg','https://i.pinimg.com/564x/ab/ba/16/abba167a50dc5873eba47c5c989e9a2d.jpg','https://i.pinimg.com/564x/ab/ba/16/abba167a50dc5873eba47c5c989e9a2d.jpg']

export const Images: React.FunctionComponent =()=>{
    return(
        <ImageWrapper>
            {urls.map(url=>
                <Image src={url} alt="img"/>
                )}
        </ImageWrapper>
    )
}