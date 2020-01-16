import React from 'react';
import { A, LeaderButton } from './styles';
import { leaders } from '../../common/leadersInfo'
import withAnimation from '../../components/withAnimation';

const AddingAnimation = withAnimation(LeaderButton);
export const Button: React.FunctionComponent = () => {
    
    return(
        <>
            {leaders.map((leader, index)=>(
                <AddingAnimation>
                    <A href={`/leader/${index}`} key={`${leader}`}>
                        {leader}
                    </A>
                </AddingAnimation>
            ))}
        </>
    )
}