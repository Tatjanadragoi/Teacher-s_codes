import styled, {css} from 'styled-components';


const basicSideCss = css`
        padding-top: 50px;
        height: 100%;
`;

export const RightSide = styled.div`

    & {
        ${basicSideCss}
        background-color: aqua;
    }

`;


export const LeftSide = styled.div`
    & {
        ${basicSideCss}
        background-color: burlywood;
    }
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: minmax(300px, 350px) 1fr;
    height: 100%;
`;