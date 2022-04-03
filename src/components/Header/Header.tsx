import { FC } from "react";
import * as Style from "./style";
import { SiGithub } from "react-icons/si";

export const Header: FC = () => {
    return (
        <>
            <Style.Root>
                <SiGithub size={24} color="#fafafa"/>
                <Style.Title>{"Github Repo Reader"}</Style.Title>
            </Style.Root>
            <Style.RootSpacer/>
        </>
    )
}

export default Header;