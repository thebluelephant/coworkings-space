'use client'

import React from "react";
import s from './Footer.module.scss';
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <div className={s.footer}>
            <div className={s.col}>
                <p>Coworkings Space</p>
                <p>Découvrez et explorez le monde du coworking</p>
            </div>
            <div className={s.col}>
                <p className={s.title}>Explorer</p>
                <Link className={s.link} href="#home">Accueil</Link>
                <Link className={s.link} href="#articles">Derniers articles</Link>
                <Link className={s.link} href="#coworkings">Coworkings</Link>
            </div>
            <div className={s.col}>
                <p className={s.title}>Support</p>
                <a className={s.link} href="mailto:lea.delacotte@gmail.com">Contact</a>
            </div>

        </div>
    )
};

export default Footer;