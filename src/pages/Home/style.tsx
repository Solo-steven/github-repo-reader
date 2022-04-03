import styled from "styled-components";

export const Background = styled.div`
    width: 100vw;
    height: ${props => `calc(100vh - ${props.theme.palette.navbar.height})`};
    background: ${props => props.theme.palette.bg};
`;

export const Container = styled.div`
    width: 100%;
    padding: 7rem 0px;
    max-width: 1280px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Primary = styled.h2`
    color: ${props => props.theme.palette.white};
    font-size: 32px;
    margin-top: 2rem ;
    margin-bottom: 1rem;
`;

export const Secondary = styled.h6`
    color: #fafafada;
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 3.2rem;
`;

export const Input = styled.input`
    width: 500px;
    background-color: #00000000;
    color: ${props => props.theme.palette.white};
    padding: 1rem .75rem;
    border: 1px solid ${props => props.theme.palette.white};
    border-radius: 10px;
    font-size: 20px;
    outline: none;
    &:focus {
        box-shadow: 0 0 5px 5px #58585896;
    }
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

export const Warning = styled.p`
    color: #ff4747d1;
    font-size: 18px;
    line-height: 20px;
    min-height: 20px;
    text-align: center;
    padding: 1rem;
`;
