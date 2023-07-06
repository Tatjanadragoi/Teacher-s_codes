import React, {useState} from "react";
import { RightSide, LeftSide, Wrapper } from './index.style';
import { MainMenu } from "../../components/main-menu";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { TodoItem } from "../../components/todo-item";


// todo = {
//     text: '',
//     isDone: false,
//     isEdditing: false
// }

export const TodoPage = () => {
    const [todos, setTodos] = useState([]);
    

    return (
        <Wrapper>
            <MainMenu/>
            <LeftSide>
                <Input size='xxl'/>
                <Button size='xxl'>
                    Add todo
                </Button>
            </LeftSide>
            <RightSide>

                <TodoItem>
                   asdasd
                </TodoItem>

            </RightSide>
        </Wrapper>
    );
};
