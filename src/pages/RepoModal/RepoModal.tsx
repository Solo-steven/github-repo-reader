import { FC, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as Style from "./style";
import * as API from "api";
import { MdStarBorder } from "react-icons/md";
import { timeString, handleErrorCode } from "utils";

interface RepoState {
    url: string;
    name: string;
    language: number;
    visibility: string;
    description: string;
    tags: Array<string>;
    starCount: number;
    watchCount: number;
    updateAt: string;
}

const SingleRepo: FC = () => {
    const { username, repo } = useParams<{username: string, repo: string}>();
    const navigation = useNavigate();
    const [ repoInfo , setRepoInfo ] = useState<RepoState>();

    useEffect(() => {
        const fetch  = async (username: string, repo: string) => {
            try {
                const data = await API.getUserRepoDetail(username, repo);
                setRepoInfo({
                    url: data.html_url,
                    name: data.full_name,
                    visibility: data.visibility,
                    language: data.language,
                    tags: data.topics,
                    description: data.description,
                    updateAt: data.updated_at,
                    starCount: data.stargazers_count,
                    watchCount: data.watchers_count,
                });
            }catch(error: any) {
                navigation("/error", { replace: true, state: handleErrorCode(404 || error?.response?.status) })
            }
        }
        if(username  && repo)
            fetch(username, repo);
    }, [repo, username, navigation]);

    if(!repoInfo) {
        return (
           <Style.Background>
               Loading ...
           </Style.Background>
        )
    }

    return (
        <Style.Background onClick={()=> { navigation(`/user/${username}/repos`, { replace: true }) }}>
            <Style.Container onClick={(e)=> { e.stopPropagation();}}>
                <Style.Header>
                    <Style.TextContainer>
                        <Style.Title href={repoInfo?.url}>{repoInfo?.name}</Style.Title>
                        <Style.LinkText href={repoInfo?.url}>{"Link to Github Page"}</Style.LinkText>
                    </Style.TextContainer>
                    <Style.StarContainer>
                        <MdStarBorder/>
                        {"Star "}
                        {repoInfo?.starCount}
                    </Style.StarContainer>
                </Style.Header>
                <Style.Description>
                    {!!repoInfo?.description ?  repoInfo?.description : "No Description"}
                </Style.Description>
                <Style.TagsContainer>
                    {repoInfo?.tags.map(tag => (
                        <Style.Tag key={tag}>{tag}</Style.Tag>
                    ))}
                </Style.TagsContainer>
                <Style.Footer>
                    <Style.UpdateAt>{ timeString(repoInfo?.updateAt)}</Style.UpdateAt>
                    <Style.Language>{repoInfo?.language}</Style.Language>
                </Style.Footer>
            </Style.Container>
        </Style.Background>
    )
};

export default SingleRepo;