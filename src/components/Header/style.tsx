import styled from "styled-components";

export const Root = styled.div`
    width: 100vw;
    height: ${props => props.theme.palette.navbar.height};
    padding: 1rem 2.5rem;
    position: absolute;
    top: 0;
    background-color: #2d333b;
    display: flex;
    align-items: center;
`;

export const RootSpacer = styled.div`
    width: 100vw;
    min-height: ${props => props.theme.palette.navbar.height};
`;

export const Title = styled.div`
    font-size: 20px;
    font-weight: 300;
    color: #fafafa ;
    margin-left:  1rem;
`;