import { FC, Profiler } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme, Global } from "system";
import { Header } from "components/Header";
import { SingleRepo } from "pages/SignleRepo";
import { UserRepos } from "pages/UserRepos";

const App: FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Global />
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route 
                        path="/user/:username/repos" 
                        element={
                            <Profiler id="repos" onRender={() => {}}>
                                 <UserRepos/>
                            </Profiler>
                        }
                    />
                    <Route path="/user/:username/repos/:repo" element={<SingleRepo/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
