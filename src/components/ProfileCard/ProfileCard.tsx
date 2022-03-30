import { FC, memo } from "react";
import * as Style from "./style";

interface ProfileCardProps {
        name: string;
        avatar: string;
        followers: number;
        following: number;
        bio: string;
}

export const ProfileCard: FC<ProfileCardProps> = (props) => {
    return (
        <>
            <Style.Avatar src={props.avatar}/>
            <Style.Name>{props.name}</Style.Name>
            <Style.FollowNumber>{props.followers}</Style.FollowNumber>
            <Style.FollowText>{"followers"}</Style.FollowText>
            <Style.FollowNumber>{props.following}</Style.FollowNumber>
            <Style.FollowText>{"following"}</Style.FollowText>
            <Style.BioText>{props.bio ? props.bio : "No bio available"}</Style.BioText>
        </>
    )
}

export default memo(ProfileCard);