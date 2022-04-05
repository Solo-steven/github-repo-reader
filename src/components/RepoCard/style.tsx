import styled from "styled-components";
import { Link } from "react-router-dom";

export const Root = styled.div`
    display: flex;
    justify-content: center;
    color: ${props => props.theme.palette.white};
    max-width: 800px;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid ${props => props.theme.palette.border};
    padding: 28px 6px;
`;

export const Container = styled.div`
    flex: 1;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 4px;
`;

export const Title = styled(Link)`
    display: block;
    text-decoration: none;
    border: none ;
    color: ${props => props.theme.palette.text.primary};
    font-size: 20px;
    line-height: 20px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;

export const Visibility = styled.div`
    color: ${props => props.theme.palette.text.secondary};
    border: 1px solid #444c56;
    padding: 2px 7px;
    font-size: 12px;
    border-radius: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
`;


export const Description = styled.div`
    color: ${props => props.theme.palette.text.secondary};
    margin-bottom:  8px;
`;

export const TagsContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 4px 0px;
`;

export const Tag = styled.div`
    font-size: 12px;
    padding: 2px 7px;
    margin: 4px 1.5px 4px 0px;
    color: ${props => props.theme.palette.text.primary};
    background-color: rgba(65,132,228,0.15);
    border-radius: 2em;

    &:hover {
        background-color: #316dca;
        color: #cdd9e5;
    }
`;

export const Footer = styled.div`
    color: ${props => props.theme.palette.text.secondary};
    font-size: 12px;
    margin-top: 8px;
    display: flex;
`;

export const UpdateAt = styled.p`
     color: ${props => props.theme.palette.text.secondary};
     margin-right: 24px;
`;

export const Language = styled.p`
     color: ${props => props.theme.palette.text.secondary};
`;

export const Aside = styled.div`
    margin: 12px 0px;
`;

export const CountContainer = styled.div`
    display: flex;
    align-items: center;
    & > *:nth-child(1) {
        margin-right: 10px ;
    }
`;
