import { FC, useState, useEffect, useCallback, useRef } from "react";
import { useParams, Outlet } from "react-router-dom";
import * as Style from "./style";
import { RepoCard } from "components/RepoCard";
import { ProfileCard } from "components/ProfileCard";
import * as API from "api";

const UserRepos: FC = () => {
    const { username } = useParams<{username: string}>();
    const loadingRef = useRef(null);
    const [userProfile, setUsrProfile] = useState<{
        name: string;
        avatar: string;
        followers: number;
        following: number;
        bio: string;
    }>();
    const fetchUserProfile = useCallback(async () => {
        if(!username) return;
        const data = await API.getUserProfile(username);
        setUsrProfile({
            name: data.login,
            avatar: data.avatar_url,
            followers: data.followers,
            following: data.following,
            bio: data.bio
        });
    }, [username] )

    const [page, setPage] = useState(1);
    const [repoProfiles, setRepoProfiles] = useState<Array<any>>([]);
    const [isEnd, setIsEnd] = useState(false);

    const fetchReposProfiles = useCallback( async () => {
        if(!username || isEnd) return;
        const data = await API.getUserRepoProfile(username, page);
        setIsEnd( data.length === 0 );
        setPage(pre => pre +1);
        setRepoProfiles(pre => [...pre, ...data]);
    }, [username, page, isEnd]);

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

   /** Reset When username change */
    useEffect(() => {
        setPage(1)
        setRepoProfiles([]);
        fetchUserProfile()
    }, [username, fetchUserProfile]);

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
