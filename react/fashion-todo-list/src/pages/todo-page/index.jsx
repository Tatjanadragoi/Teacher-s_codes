import React from "react";
import { RightSide, LeftSide, Wrapper } from './index.style';
import { MainMenu } from "../../components/main-menu";
import { Button } from "../../components/button";
import { Input } from "../../components/input";


export const TodoPage = () => {

    return (
        <Wrapper>
            <MainMenu/>
            <LeftSide>
                <Input size='xxl'/>
                <Button size='xxl'>
                    Add todo
                </Button>
            </LeftSide>
            <RightSide/>
        </Wrapper>
    );
};
