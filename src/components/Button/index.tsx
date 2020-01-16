import React from 'react';
import { A, LeaderButton } from './styles';
import { leaders } from '../../common/leadersInfo'
import withAnimation from '../../components/withAnimation';
import {
    BrowserRouter as Router,
    useHistory,
  } from "react-router-dom";

const AddingAnimation = withAnimation(LeaderButton);

export const Button: React.FunctionComponent = () => {
    let history = useHistory();

    const clickHandler = (index: number) => {
        history.push(`/leader/${index}`)
        return;
    }

    return(
        <>
            {leaders.map((leader, index)=>(
                <AddingAnimation key={index} onClick={() => clickHandler(index)}>
                    <A  key={`${leader}`}>
                        {leader}
                    </A>
                </AddingAnimation>
            ))}
        </>
    )
}