import styled from "styled-components";

export const Root = styled.div`
    width: 100vw;
    height: 100vh;
    background-color:#22272e;
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    height: 100%;
    max-width: 1280px;
    margin: auto;
    overflow: scroll;
`;

export const ProfileBlock = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
    padding: 2rem;
`;

export const ReposContainer = styled.div`
    grid-column-start: 2;
    grid-column-end: 4;
`;

export const LoadingIcon = styled.div`
    max-width: 800px;
    padding: 20px 40px;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
`;