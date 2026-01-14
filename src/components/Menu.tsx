'use client'

import React from "react";
import s from './Menu.module.scss';
import Link from "next/link";

const Menu: React.FC = () => {
    return (
        <div className={s.menu}>
            <Link className={s.link} href="#home">Accueil</Link>
            <Link className={s.link} href="https://www.blog.coworkings.space">Blog</Link>
            <Link className={s.link} href={"#coworkings"}>Coworkings</Link>
        </div>
    )
};

export default Menu;