import axios from "axios";

const CustomHeader = axios.create({
    baseURL: "https://api.github.com/"
});

export async function getUserRepoProfile (userName: string, page = 1) {
    return await CustomHeader.get(`/users/${userName}/repos?per_page=${10}&page=${page}`)
        .then(response => response.data)
        .catch(error =>  { throw error })
}

export async function getUserRepoDetail(userName: string, repo: string) {
    return await CustomHeader.get(`/repos/${userName}/${repo}`)
        .then(response => response.data)
        .catch(error => { throw error })
}