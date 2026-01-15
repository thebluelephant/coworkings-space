'use client'

import React from "react";
import s from './LandingContent.module.scss'
import Link from "next/link";


const LandingContent: React.FC = () => {
    return (
        <div className={s.landingContent} id="home">
            <div className={s.content}>
                <h1>Découvrez, <br /> <span>inspirez</span>, <br /> travaillez</h1>
                <h3>Découvrez et explorez le monde du coworking</h3>
                <div className={s.buttons}>
                    <Link href="#coworkings" className={s.button}>
                        Découvrir les spots
                    </Link>
                    <Link href='https://www.blog.coworkings.space' className={s.button}>
                        Explorez le blog
                    </Link>
                </div>

            </div>
            <div>
                <img className={s.image} src="/images/landing-image.png" />
            </div>
        </div>
    )
};

export default LandingContent;