import { FC, Profiler } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme, Global } from "system";
import { Header } from "components/Header";
import { Home  } from "pages/Home";
import { RepoModal } from "pages/RepoModal";
import { UserRepos } from "pages/UserRepos";
import { ErrorPage } from "pages/Error";

const App: FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Global />
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route 
                        path="/user/:username/repos" 
                        element={
                            <Profiler id="repos-profiles" onRender={() => {}}>
                                 <UserRepos/>
                            </Profiler>
                        }
                    >
                        <Route 
                            path=":repo" 
                            element={
                                <Profiler id="single-repo" onRender={() => {}}>
                                    <RepoModal/>
                                </Profiler>
                            }
                        />
                    </Route>
                    <Route 
                        path="/error"
                        element={<ErrorPage/>}
                    />
                    <Route 
                        path="*"
                        element={<Navigate to="error" state={{code: 404, prompt:  "Page Not Found"}} />}
                    />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
