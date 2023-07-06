import styled from 'styled-components';


export const Wrapper = styled.div`
    & {
        background-color: #2d2d2d;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 30px;
        color: #fff;
        font-size: 14px;
        row-gap: 10px;
        line-height: 22px;
        padding: 15px;
        border-radius: 10px;
        justify-content: center;
        width: 200px;
    }

    & > *:first-child {
        grid-column: 1 / -1;
    }
`;

