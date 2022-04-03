import { FC } from "react";
import { useLocation, useNavigate, Navigate  } from "react-router-dom";
import * as Style from "./style";
import { MdOutlineErrorOutline } from "react-icons/md";

export const ErrorPage: FC = () => {
    const { state } = useLocation() as any;
    const navigation = useNavigate();
    if(!state)
        return <Navigate to="/" replace/>
    return (
        <Style.Background>
            <Style.Container>
                <MdOutlineErrorOutline size={184} color="#FAFAFA"/>
                <Style.StatusCode>{ state.code || 404 }</Style.StatusCode>
                <Style.Promption>{  state.prompt || "Error Happend" }</Style.Promption>
                <Style.Button onClick={()=> {  navigation("/")}}>{"Back to Main Page"}</Style.Button>
            </Style.Container>
        </Style.Background>
    );
};

export default ErrorPage;