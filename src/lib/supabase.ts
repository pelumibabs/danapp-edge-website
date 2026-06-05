import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://uvndxqxkigvenskiitsk.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2bmR4cXhraWd2ZW5za2lpdHNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk5MzQ2MDcsImV4cCI6MjA5NTUxMDYwN30.QGPyz9hzv5_zaKnn0_5pdKDARZWGy4AT4eaAV41EG4k'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
