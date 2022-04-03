import { FC, useState, useEffect, useCallback, useRef  } from "react";
import { useNavigate, useParams, Outlet } from "react-router-dom";
import axios from "axios";
import * as Style from "./style";
import { RepoCard } from "components/RepoCard";
import { ProfileCard } from "components/ProfileCard";
import * as API from "api";

function handleErrorCode(code: number | undefined) {
    switch (code) {
        case 404: 
            return {
                code: 404,
                prompt: "User Not Find"
            }
        case 403:
            return {
                code: 403,
                prompt: "Too Many Requests"
            }
        default: 
            return {
                code: 500,
                prompt: "Error Happend",
            }
    }
}

const UserRepos: FC = () => {
    const { username } = useParams<{username: string}>();
    const navigation = useNavigate();
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
        }catch(error) {
            if(axios.isAxiosError(error)) {
                navigation("/error", {
                    replace: true, 
                    state: handleErrorCode(error.response?.status)
                })
            }  
        }
    }, [username, navigation])

   /** Reset When username change */
    useEffect(() => {
        setPage(pre => pre === 1 ? pre : 1)
        setRepoProfiles(pre => pre.length ===0 ? pre : []);
        fetchUserProfile();
    }, [username,fetchUserProfile]);

    const [page, setPage] = useState(1);
    const [repoProfiles, setRepoProfiles] = useState<Array<any>>([]);
    const [isEnd, setIsEnd] = useState(false);
    const loadingRef = useRef(null);
    
    const fetchReposProfiles = useCallback( async () => {
        try {
            if(!username || isEnd) return;
            const data = await API.getUserRepoProfile(username, page);
            setIsEnd( data.length === 0 );
            if(data.length === 0 ) return;
            setPage(pre => pre + 1);
            setRepoProfiles(pre => [...pre, ...data]);
        }catch (error) {
            if(axios.isAxiosError(error)) {
                console.log(error.response?.status);
                navigation("/error", { 
                    replace: true ,
                    state: handleErrorCode(error.response?.status) 
                })
            }  
        }
    }, [username, page, isEnd, navigation]);

    /** Register Intersection Observer when data dependencies change */
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => { 
            for(const entry of entries) {
                if(entry.isIntersecting) {
                    fetchReposProfiles()
                }
            }
        }, { threshold: 0.3 });
        if(loadingRef.current)
            observer.observe(loadingRef.current)
        return () => {
            observer.disconnect();
        }
    }, [fetchReposProfiles]);

    console.log("render", page)
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
                    {
                        repoProfiles.map(profile => {
                            return (
                                <RepoCard  
                                    key={profile.id}
                                    name={profile.name}
                                    description={profile.description}
                                    language={profile.language}
                                    starCount={profile.stargazers_count}
                                    watchCount={profile.watchers_count}
                                    visibility={profile.visibility}
                                    tags={profile.topics}
                                />
                            )
                        })
                    }
                    {
                        isEnd ? (
                            null
                        ) : (
                            <Style.LoadingIcon ref={loadingRef}>
                                {"Loading"}
                            </Style.LoadingIcon>
                        )
                    }
                </Style.ReposContainer>
            </Style.Container>
            <Outlet/>
        </Style.Root>
    );
};

export default UserRepos;
