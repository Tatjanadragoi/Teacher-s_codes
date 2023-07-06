import styled from 'styled-components';
import { SIZE } from '../../shared/styles';


export const Input = styled.input`
    & {
        border: 1px solid transparent;
        outline: none;
       
        ${({size = 'l'}) => SIZE[size]}
    }

    &:focus {
        box-shadow: inset 2px 2px 3px rgba(0,0,0,0.2);
    }
`;