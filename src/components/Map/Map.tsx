'use client'

import React, { useEffect, useMemo, useState } from "react";
import s from './Map.module.scss';
import "../../styles/globals.css";
import dynamic from "next/dynamic";
import coworkings from '../../../public/documents/coworkings.json'
import { Coworking, CoworkingDetailsType } from "@/utils/types";
import CoworkingDetails from "./CoworkingDetails";
import AddCoworkModal from "./AddCoworkModal";

const Map: React.FC = ({ }) => {
    const [coworkingDetails, setCoworkingsDetails] = useState<CoworkingDetailsType | null>(null)
    const [addCoworkModalOpen, setAddCoworkModalOpen] = useState(false)
    const Plan = useMemo(() => dynamic(
        () => import('@/components/Map/Plan'),
        {
            loading: () => <p>A map is loading</p>,
            ssr: false
        }
    ), [])


    const getRandomCoworking = () => {
        const randomIndex = Math.floor(Math.random() * 155)
        const randomCoworking = coworkings[randomIndex]
        if (randomCoworking.latitude && randomCoworking.longitude) {
            setCoworkingsDetails({ ...randomCoworking, type: 'random' })
        }
    }

    useEffect(() => {
        getRandomCoworking()
    }, []);

    return (
        <div className={s.map}>
            <AddCoworkModal isOpen={addCoworkModalOpen} onClose={() => setAddCoworkModalOpen(false)} />
            <div className={s.chip}>📖 La Map</div>
            <div className={s.header}>
                <h2>Explorez les coworkings</h2>
                <p>Cliquez sur un repère pour en découvrir plus sur un espace.</p>
            </div>
            <div className={s.content} id="coworkings">
                <Plan coworkings={coworkings as Coworking[]} onMarkerClick={(coworking) => setCoworkingsDetails({ ...coworking, type: 'selected' })} selectedCoworkingId={coworkingDetails?.id} />
                <div className={s.detailsContainer}>
                    <CoworkingDetails coworking={coworkingDetails} />
                    <button onClick={() => setAddCoworkModalOpen(true)}>+ Ajouter votre coworking</button>
                </div>

            </div>

        </div>
    )
};

export default Map;