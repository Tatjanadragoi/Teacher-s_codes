import React from "react";
import {Wrapper} from './index.style';
import {Button} from '../button';
import {Input} from '../input';


export const MainMenu = () => {
    return (
        <Wrapper>
            <Button size='xl' view='primary'>
                login
            </Button>
            <Input size='xl' placeholder="eneter smth" type='text'/>
        </Wrapper>
    );
};