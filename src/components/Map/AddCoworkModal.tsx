'use client'

import React, { useState } from "react";
import { supabase } from '../../utils/supabase.config'
import s from './AddCoworkModal.module.scss'

type CoworkForm = {
    name: string
    address: string
    postal_code: string
    city: string
    website: string
}
type AddCoworkModalProps = {
    isOpen: boolean
    onClose: () => void
};

const AddCoworkModal: React.FC<AddCoworkModalProps> = ({ isOpen, onClose }) => {
    const defaultForm = { name: '', address: '', postal_code: '', city: '', website: '' }
    const [form, setForm] = useState<CoworkForm>(defaultForm)
    const [hasError, setHasError] = useState(false)
    const [onSuccessSubmit, setOnSuccessSubmit] = useState(false)


    if (!isOpen) {
        return null
    }

    const onSubmitForm = async () => {
        const hasFieldInvalid = Object.entries(form).filter((entry) => entry[0] !== 'website' && entry[1].length < 3).length
        if (hasFieldInvalid) {
            setHasError(true)
            return
        } else {
            setHasError(false)
            const { error } = await supabase
                .from('coworkings_from_users')
                .insert([
                    { name: form.name, address: form.address, city: form.city, postal_code: form.postal_code, website: form.website },
                ])
                .select()
            if (!error) {
                setForm(defaultForm)
                setOnSuccessSubmit(true)
                setTimeout(() => {
                    setOnSuccessSubmit(false)
                    onClose()
                }, 2000);
            }
        }
    }

    return (
        <div className={s.addCoworkModal}>
            <div className={s.modal}>
                <img
                    src="/icons/close.svg"
                    alt=""
                    onClick={() => {
                        setForm(defaultForm)
                        onClose()
                    }
                    } />
                <h4>Ajouter un coworking</h4>
                <label htmlFor="name">Nom <span>*</span></label>
                <input required type="text" id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <label htmlFor="address">Adresse <span>*</span></label>
                <input required type="text" id="address" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
                <label htmlFor="postalCode">Code postal <span>*</span></label>
                <input required type="text" id="postalCode" value={form.postal_code} onChange={(e) => setForm({ ...form, postal_code: e.target.value })} />
                <label htmlFor="city">Ville <span>*</span></label>
                <input required type="text" id="city" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
                <label htmlFor="website">Site web</label>
                <input type="text" id="website" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} />

                {hasError && <p className={s.error}>Une erreur est présente dans votre formulaire</p>}
                <button className={onSuccessSubmit ? s.sentButton : s.button} onClick={() => onSubmitForm()}>{onSuccessSubmit ? 'Envoyé, merci !' : 'Envoyer'}</button>
            </div>
        </div>
    )
};

export default AddCoworkModal;