import React from "react";
import { HeaderStyled } from "./styled";
import { Link } from "react-router-dom";

function Header() {
    const pages = [
        {
            route: "/",
            description: "Home",
        },
        {
            route: "/about",
            description: "About",
        },
    ];
    return (
        <HeaderStyled>
            <h3>Header</h3>
            <nav>
                {pages.map((page, index) => {
                    return (
                        <Link key={index} to={page.route}>
                            {page.description}
                        </Link>
                    );
                })}
            </nav>
        </HeaderStyled>
    );
}

export default Header;
