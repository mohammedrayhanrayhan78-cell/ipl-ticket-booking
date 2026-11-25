import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yvjibdcbopgizqoaiupr.supabase.co'
const supabaseKey = 'sb_publishable_iheZUT_31sHxU_7mX_to1w_QpmAA966'

export const supabase = createClient(supabaseUrl, supabaseKey)
