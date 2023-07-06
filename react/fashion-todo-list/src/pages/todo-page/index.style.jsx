import styled, {css} from 'styled-components';




const basicSideCss = css`
        height: 100%;
`;

export const RightSide = styled.div`
    & {
        ${basicSideCss}
        background-color: aqua;
        padding-top: 100px;
    }
`;


export const LeftSide = styled.div`
    & {
        ${basicSideCss}
        background-color: #2d2d2d;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 10px;
    }
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: minmax(300px, 350px) 1fr;
    height: 100%;
`;