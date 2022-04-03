import styled from "styled-components";

export const Background = styled.div`
    width: 100vw;
    height: ${props => `calc(100vh - ${props.theme.palette.navbar.height})`};
    background: ${props => props.theme.palette.bg};
`;

export const Container = styled.div`
    max-width: 1280px;
    margin: auto ;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 7rem;
`;

export const StatusCode = styled.h3`
    color: ${props => props.theme.palette.white};
    font-size: 84px;
    text-align: center;
    letter-spacing: 1.4px;
    font-weight: 500;
    margin-bottom: .5rem ;
`;

export const Promption = styled.p`
    font-size: 24px;
    color: ${props => props.theme.palette.white};
    margin-bottom: 2rem ;
`;

export const Button = styled.button`
    background-color: ${props => props.theme.palette.white};
    max-width: 250px;
    width: 100%;
    color: ${props => props.theme.palette.black};
    font-size: 18px;
    padding: .75rem;
    border: none;
    border-radius: 15px;
    cursor: pointer;

    &:active {
        box-shadow: 0 0 5px 5px #58585896;
    }
`;
