import { createClient } from '@supabase/supabase-js'

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_AUTH) {
    throw new Error(
        'Supabase key is required: set SUPABASE_ANON_KEY or NEXT_PUBLIC_SUPABASE_ANON_KEY or SUPABASE_AUTH in your environment variables'
    )
}

export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_AUTH)
