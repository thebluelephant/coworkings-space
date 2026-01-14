'use client'

import React from "react";
import Image from "next/image";
import s from './LandingContent.module.scss'
import Link from "next/link";
//import useIsMobile from "@/utils/useIsMobile";


const LandingContent: React.FC = () => {
    // const isMobile = useIsMobile()
    return (
        <div className={s.landingContent} id="home">
            <div className={s.content}>
                <h1>Travaillez, <br /> <span>connectez</span>, <br /> inspirez</h1>
                <h3>Rejoignez des milliers de créatifs qui réinventent le travail chaque jour.</h3>
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
                <Image
                    className={s.image}
                    src="/images/landing-image.png"
                    alt="coworking image"
                    height={700} // {isMobile ? 250 : 700}
                    width={700}//{isMobile ? 400 : 700}
                />
            </div>
        </div>
    )
};

export default LandingContent;