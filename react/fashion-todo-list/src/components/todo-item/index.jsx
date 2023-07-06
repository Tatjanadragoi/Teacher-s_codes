import React from "react";
import { Wrapper } from "./index.style";
import { Button } from "../button";

export const TodoItem = () => {
    return (
        <Wrapper>
            <div>Text</div>
            <Button>
                Toggle
            </Button>
            <Button>
                Edit
            </Button>
            <Button>
                Delete
            </Button>
        </Wrapper>
    );
};