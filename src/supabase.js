import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://znpupjpjygxpztvmkiwl.supabase.co";
const supabaseKey = "sb_publishable_loi9DzwKPStWSrCBt-4sHw_ArkCgjcY";

export const supabase = createClient(supabaseUrl, supabaseKey);
