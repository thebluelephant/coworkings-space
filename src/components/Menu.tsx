'use client'

import React from "react";
import s from './Menu.module.scss';
import Link from "next/link";

const Menu: React.FC = () => {
    return (
        <div className={s.menu}>
            <div className={s.title}>
                <img src="/images/logo.png" alt="" />
                <h3>Coworkings<span>.space</span></h3>
            </div>
            <div className={s.links}>
                <Link className={s.link} href="#home">Accueil</Link>
                <Link className={s.link} href="https://www.blog.coworkings.space">Blog</Link>
                <Link className={s.link} href={"#coworkings"}>Coworkings</Link>
            </div>

        </div>
    )
};

export default Menu;