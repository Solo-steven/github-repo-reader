import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Style from "./style";
import { SiGithub } from "react-icons/si";

export const Home: FC = () => {
    const [value, setValue] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const navigation = useNavigate();
    return (
        <Style.Background>
            <Style.Container>
                <SiGithub size={96} color={"#FAFAFA"}/>
                <Style.Primary>{"Welcome to Github Repo Reader"}</Style.Primary>
                <Style.Secondary>{"enter the user name you want to search"}</Style.Secondary>
                <Style.Input 
                    value={value} 
                    onChange={(e) => { 
                        setError(false);
                        setValue(e.target.value) 
                    }} 
                />
                <Style.Warning>
                    {error ? "Search keyword can't be empty" : " "}
                </Style.Warning>
                <Style.Button 
                    onClick={()=> { 
                        if(!value) {
                            setError(true);
                            return;
                        }
                        navigation(`/user/${value}/repos`)
                    }}
                >
                    {"Search"}
                </Style.Button>
            </Style.Container>
        </Style.Background>
    );
};

export default Home;