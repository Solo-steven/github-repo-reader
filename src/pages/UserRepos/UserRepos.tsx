import { FC, useState, useEffect, useCallback, useRef  } from "react";
import { useParams, Outlet, Navigate } from "react-router-dom";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer"
import * as Style from "./style";
import { RepoCard } from "components/RepoCard";
import { ProfileCard } from "components/ProfileCard";
import * as API from "api";
import { handleErrorCode } from "utils";

const UserRepos: FC = () => {
    const { username } = useParams<{username: string}>();
    const [error, setError] = useState<number>(0);
    /** User Profile */
    const [userProfile, setUsrProfile] = useState<{
        name: string;
        avatar: string;
        followers: number;
        following: number;
        bio: string;
    }>();
    const fetchUserProfile = useCallback(async () => {
        try {
            if(!username) return;
            const data = await API.getUserProfile(username);
            setUsrProfile({
                name: data.login,
                avatar: data.avatar_url,
                followers: data.followers,
                following: data.following,
                bio: data.bio
            });
        }catch(error: any) {
            setError(404 || error?.response?.status);
        }
    }, [username])
    useEffect(() => {
        setPage(pre => pre === 1 ? pre : 1)
        setRepoProfiles(pre => pre.length ===0 ? pre : []);
        fetchUserProfile();
    }, [username,fetchUserProfile]);
    /** Repo Profiles */
    const [page, setPage] = useState(1);
    const [repoProfiles, setRepoProfiles] = useState<Array<any>>([]);
    const [isEnd, setIsEnd] = useState(false);
    const fetchReposProfiles = useCallback( async () => {
        try {
            if(!username || isEnd) return;
            const data = await API.getUserRepoProfile(username, page);
            setIsEnd( data.length === 0 );
            if(data.length === 0 ) return;
            setPage(pre => pre + 1);
            setRepoProfiles(pre => [...pre, ...data]);
        }catch (error: any) {
            setError(404 || error?.response?.status);
        }
    }, [username, page, isEnd]);
    const observerRef = useRef<any>(null);
    const refCallBack = useCallback((node: HTMLElement| null) => {
        if(observerRef.current) {
            observerRef.current.disconnect();
        }
        observerRef.current = new IntersectionObserver((entries) => {
            for(const entry of entries) {
                if(entry.isIntersecting) {
                    fetchReposProfiles()
                }
            }
        }, { threshold: 0.3 });
        if(node) observerRef.current.observe(node);
        else console.log("??")
    }, [fetchReposProfiles])
    

   if(error) 
    return (
        <Navigate to="/error" replace state={handleErrorCode(error)}/>
    )
    return (
        <Style.Root>
            <Style.Container>
                <Style.ProfileBlock>
                    {
                        userProfile ? (
                            <ProfileCard {...userProfile}/>
                        ) : null
                    }
                </Style.ProfileBlock>
                <Style.ReposContainer>
                    <AutoSizer>
                        {({height, width}) => (
                            <List
                                height={height}
                                width={width}
                                itemData={repoProfiles}
                                itemCount={repoProfiles.length + 1}
                                itemSize={(height / 4.5)}
                            >
                                {({index, style, data}) => {
                                    if(index === data.length)
                                        return  isEnd 
                                            ? (
                                                <div style={style}>
                                                    <Style.LoadingIcon>
                                                        {"No More To Show"}
                                                    </Style.LoadingIcon>
                                                </div>
                                            ) : (
                                                <div ref={refCallBack} style={style}>
                                                    <Style.LoadingIcon >
                                                        {"Loading"}
                                                    </Style.LoadingIcon>
                                                </div>
                                            )
                                    return (
                                        <div style={style} >
                                            <RepoCard 
                                                key={data[index].id}
                                                name={data[index].name}
                                                description={data[index].description}
                                                language={data[index].language}
                                                starCount={data[index].stargazers_count}
                                                watchCount={data[index].watchers_count}
                                                visibility={data[index].visibility}
                                                tags={data[index].topics}
                                                updateAt={data[index].updated_at}
                                            />
                                        </div>
                                    )
                                }}
                            </List>
                        )}
                    </AutoSizer>
                </Style.ReposContainer>
            </Style.Container>
            <Outlet/>
        </Style.Root>
    );
};

export default UserRepos;
