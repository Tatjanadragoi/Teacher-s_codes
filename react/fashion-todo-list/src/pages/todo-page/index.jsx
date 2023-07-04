import React from "react";
import {RightSide, LeftSide, Wrapper} from './index.style';
import { MainMenu } from "../../components/main-menu";


export const TodoPage = () => {


    

    return (
        <Wrapper>
            <MainMenu/>
            <LeftSide/>
            <RightSide/>
        </Wrapper>
    );
};
