import React from 'react';
import { A, LeaderButton } from './styles';
import { leaders } from '../../common/leadersInfo'
import withAnimation from '../../components/withAnimation';

const AddingBorder = withAnimation(LeaderButton);
export const Button: React.FunctionComponent = () => {
    return(
        <>
            {
                Object.keys(leaders).map(leaderUrl =>(
                    <AddingBorder key={leaderUrl}>
                        <A href={`/${leaderUrl}`} key={leaderUrl}>
                            {leaders[leaderUrl]}
                        </A>
                    </AddingBorder>
                ))
            }      
        </>
    )
}