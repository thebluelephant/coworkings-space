import { CoworkingDetailsType } from "@/utils/types";
import React, { useMemo } from "react";
import s from './CoworkingDetails.module.scss'

export interface CoworkingDetailsProps {
    coworking: CoworkingDetailsType | null
}

const CoworkingDetails: React.FC<CoworkingDetailsProps> = ({
    coworking,
}) => {
    const randomImageIndex = useMemo(() => {
        const randomIndex = Math.floor(Math.random() * 5)
        return coworking ? randomIndex : 1
    }, [coworking])

    if (!coworking) {
        return null
    }

    return (
        <div className={s.coworkingDetails}>
            {coworking.type === 'random' ? <p className={s.chip}>🌴 Coworking au hasard</p> : ''}
            <img src={`/images/coworking-details/details${randomImageIndex}.jpg`} alt="" />
            <div className={s.content}>
                <p className={s.name}>{coworking.name}</p>
                <span>
                    <img src="/icons/marker-selected.svg" alt="" />
                    <p className={s.address}>{coworking.address}, {coworking.postal_code} {coworking.city}</p>
                </span>

            </div>

        </div>
    );
};

export default CoworkingDetails