import styled from "styled-components";

export const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

    width: 100vw;
    height: 100vh;
    background-color:#22272eb2;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    width: 100%;
    max-width: 640px;
    margin: auto;
    border-radius: 20px;
    border:  1px solid #444c56;
    background-color: #2d333b;
    box-shadow:  0 0 transparent;
    padding: 2rem 3rem;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.a`
    display: block;
    text-decoration: none;
    border: none;
    cursor: pointer;
    color: ${props => props.theme.palette.text.primary};
    font-size: 20px;
    &:hover {
        text-decoration: underline;
    }
`;
export const LinkText = styled.a`
    text-decoration: none;
    color: #316ecab6;
    font-size: 14px;
    margin: 4px 0px;
`;

export const StarContainer = styled.div`
    width: 100px;
    background-color: #22272e;
    padding: 7px 8px;
    border-radius: 10px ;
    color: #adbac7;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    & > *:nth-child(1) {
        margin-right: 10px ;
    }
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
        background-color: #316dca ;
        color: #cdd9e5;
    }
`;

export const Description = styled.div`
    color: ${props => props.theme.palette.text.secondary};
    margin-bottom:  8px;
`;

export const Footer = styled.div`
    display: flex;
    align-items: center;
    border-top: 1px solid #444c56;
    padding-top: .8rem;
    margin-top: .8rem ;
`;

export const UpdateAt = styled.p`
     color: ${props => props.theme.palette.text.secondary};
     margin-right: 24px;
`;

export const Language = styled.p`
     color: ${props => props.theme.palette.text.secondary};
`;
