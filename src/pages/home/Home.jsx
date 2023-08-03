import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Main from "../../components/main";
import api from "../../services/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HomeUlStyled, HomeLiStyled } from "./styled";

function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const load = async () => {
            const response = await api.get("users");
            setUsers(response.data);
        };
        load();
    }, []);

    return (
        <>
            <Header />
            <Main>
                <div>Home</div>
                <HomeUlStyled>
                    {users &&
                        users.map((user) => (
                            <HomeLiStyled key={user.id}>
                                <p>{user.login}</p>
                                <img
                                    src={user.avatar_url}
                                    alt=""
                                    style={{
                                        width: "50px",
                                        borderRadius: "90%",
                                    }}
                                />
                                <Link to={`portfolio/${user.login}`}>
                                    Venha ver meu portfolio
                                </Link>
                            </HomeLiStyled>
                        ))}
                </HomeUlStyled>
            </Main>
            <Footer />
        </>
    );
}

export default Home;
