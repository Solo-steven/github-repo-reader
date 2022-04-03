import { FC, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import * as Style from "./style";
import * as API from "api";
import { MdStarBorder } from "react-icons/md";

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


const timeString = (time: string | undefined) => {
    if(!time) return;
    const date = new Date(time);
    let month: string = "";
    switch(date.getMonth()+1) {
        case 1: month = "Jan"; break;
        case 2: month = "Feb"; break;
        case 3: month = "Mar"; break;
        case 4: month = "Apr"; break;
        case 5: month = "May"; break;
        case 6: month = "Jun"; break;
        case 7: month = "Jul"; break;
        case 8: month = "Aug"; break;
        case 9: month = "Sep"; break;
        case 10: month = "Oct"; break;
        case 11: month = "Nov"; break;
        case 12: month = "Dec"; break;
    }
    return `Update on ${date.getDate()} ${month} ${date.getFullYear()}`
}

const SingleRepo: FC = () => {
    const { username, repo } = useParams<{username: string, repo: string}>();
    const navigation = useNavigate();
    const [ repoInfo , setRepoInfo ] = useState<RepoState>();

    useEffect(() => {
        const fetch = async (username: string, repo: string) => {
            const data = await API.getUserRepoDetail(username, repo);
            console.log(data)
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
        }
        if(username && repo)
           fetch(username, repo);
    }, [username, repo])
    return (
        <Style.Background onClick={()=> { navigation(-1); }}>
            <Style.Container onClick={(e)=> { e.stopPropagation();}}>
                <Style.Header>
                    <Style.Title href={repoInfo?.url}>{repoInfo?.name}</Style.Title>
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
                        <Style.Tag>{tag}</Style.Tag>
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