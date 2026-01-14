'use client'

import React from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet"
import s from './Map.module.scss';
import L from 'leaflet';
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import { Coworking } from "@/utils/types";

type PlanProps = {
    coworkings: Coworking[]
    onMarkerClick: (coworking: Coworking) => void
    selectedCoworkingId?: number
}

const selectedMarker = new L.Icon({
    iconUrl: '/icons/marker-selected.svg',
    iconRetinaUrl: '/icons/marker-selected.svg',
    iconAnchor: undefined,
    popupAnchor: undefined,
    shadowUrl: undefined,
    shadowSize: undefined,
    shadowAnchor: undefined,
    iconSize: new L.Point(24, 24),
    className: 'marker'
});
const defaultMarker = new L.Icon({
    iconUrl: '/icons/marker.svg',
    iconRetinaUrl: '/icons/marker.svg',
    iconAnchor: undefined,
    popupAnchor: undefined,
    shadowUrl: undefined,
    shadowSize: undefined,
    shadowAnchor: undefined,
    iconSize: new L.Point(24, 24),
    className: 'marker'
});


const Plan: React.FC<PlanProps> = ({ coworkings, onMarkerClick, selectedCoworkingId }) => {

    return (
        <div className={s.plan}>
            <MapContainer className={s.planContainer} center={[46.813, 1.69]} zoom={6} scrollWheelZoom={false}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    coworkings.map((coworking) => {
                        if (coworking.latitude && coworking.longitude) {
                            return (
                                <Marker
                                    icon={selectedCoworkingId === coworking.id ? selectedMarker : defaultMarker}
                                    key={coworking.id}
                                    position={[coworking.latitude, coworking.longitude]}
                                    eventHandlers={{
                                        click: () => { onMarkerClick(coworking) }
                                    }} />
                            )
                        }
                    })
                }
            </MapContainer>
        </div>
    )

};

export default Plan;