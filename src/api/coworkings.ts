import { supabase } from "@/utils/supabase.config"
import { Coworking, CoworkingFromUser } from "@/utils/types"


export const fetchAllCoworkings = async (): Promise<Coworking[]> => {
    const [coworkings, coworkingsFromUsers] = await Promise.all([
        fetchCoworkings(),
        fetchCoworkingsFromUsers(),
    ])
    return coworkings.concat(coworkingsFromUsers)
}

export const fetchCoworkings = async (): Promise<Coworking[]> => {
    const { data, error } = await supabase
        .from('coworkings')
        .select()

    if (error) {
        return []
    }
    return (data ?? []) as Coworking[]
}

export const fetchCoworkingsFromUsers = async (): Promise<CoworkingFromUser[]> => {
    const { data, error } = await supabase
        .from('coworkings_from_users')
        .select()
        .eq('validated', true)

    if (error) {
        return []
    }
    return (data ?? []) as CoworkingFromUser[]

}