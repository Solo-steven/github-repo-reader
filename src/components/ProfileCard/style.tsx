import styled from "styled-components";

export const Avatar = styled.img`
    border-radius: 50%;
    width: 300px;
    height: 300px;
`;

export const Name = styled.div`
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
    color: ${props => props.theme.palette.text.secondary};
    padding: 16px 0px;
`;

export const FollowText = styled.div`
    display: inline-block;
    font-size: 14px;
    color: ${props => props.theme.palette.text.secondary};
    margin-right: 12px;
`;

export const FollowNumber = styled.div`
    display: inline-block;
    font-size: 14px;
    color: #adbac7;
    margin-right: 4px;
`;

export const BioText = styled.div`
    border-top: 1px solid  ${props => props.theme.palette.border};
    padding-top: 1rem;
    margin-top: 1rem ;
    color: ${props => props.theme.palette.text.secondary};
    font-size: 14px;
`;
