import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Main from "../../components/main";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useParams } from "react-router-dom";

function Portifolio() {
    const [repos, setRepos] = useState([]);
    const { username } = useParams();
    console.log(username);

    useEffect(() => {
        const load = async () => {
            const response = await api.get(`users/${username}/repos`);
            setRepos(response.data);
        };
        load();
    }, []);
    return (
        <>
            <Header />
            <Main>
                <div>Portfolio</div>
                <ul>
                    {repos &&
                        repos.map((repo) => <li key={repo.id}>{repo.name}</li>)}
                </ul>
            </Main>
            <Footer />
        </>
    );
}

export default Portifolio;
