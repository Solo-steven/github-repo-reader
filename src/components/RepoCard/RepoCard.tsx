import { FC, memo } from "react";
import { useParams } from "react-router-dom";
import * as Style from "./style";
import { MdStarBorder, MdOutlineVisibility } from "react-icons/md";

interface RepoCardProps {
    name: string;
    language: number;
    visibility: string;
    description: string;
    tags: Array<string>;
    starCount: number;
    watchCount: number;
    // updateAt: string;
}

export const RepoCard: FC<RepoCardProps>  = (props) => {
    const { username } = useParams<{username: string}>()
    return (
        <Style.Root>
            <Style.Container>
                <Style.Header>
                    <Style.Title to={`/user/${username}/repos/${props.name}`}>
                        {props.name}
                    </Style.Title>
                    <Style.Visibility>
                        {props.visibility}
                    </Style.Visibility>
                </Style.Header>
                <Style.Description>
                    {props.description}
                </Style.Description>
                <Style.TagsContainer>
                    {props.tags.map((tag) => (
                        <Style.Tag key={tag}>{tag}</Style.Tag>
                    ))}
                </Style.TagsContainer>
                <Style.Footer>
                    {props.language}
                </Style.Footer>
            </Style.Container>
            <Style.Aside>
                <Style.CountContainer>
                    <MdStarBorder/>
                    {props.starCount}
                </Style.CountContainer>
                <Style.CountContainer>
                    <MdOutlineVisibility/>
                    {props.watchCount}
                </Style.CountContainer>
            </Style.Aside>
        </Style.Root>
    )
}

export default memo(RepoCard);