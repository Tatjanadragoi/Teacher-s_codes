import React from "react";
import { Wrapper } from "./index.style";
import { Button } from "../button";

export const TodoItem = ({children}) => {
    return (
        <Wrapper>
            <div>{children}</div>
            <Button size='xxl'>
                Toggle
            </Button>
            <Button size='l'>
                Edit
            </Button>
            <Button size='l'>
                Delete
            </Button>
        </Wrapper>
    );
};