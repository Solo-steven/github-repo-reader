import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme, Global } from "system";
import { SingleRepo } from "pages/SignleRepo";
import { UserRepos } from "pages/UserRepos";

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Global />
            <BrowserRouter>
                <Routes>
                    <Route path="/user/:username/repos" element={<UserRepos/>}/>
                    <Route path="/user/:username/repos/:repo" element={<SingleRepo/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
