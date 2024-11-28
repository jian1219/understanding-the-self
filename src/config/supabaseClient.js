import { createClient } from '@supabase/supabase-js';

// Replace with your Supabase project URL and API key
const supabaseUrl = 'https://jyyotibpstmdqzbjgloz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5eW90aWJwc3RtZHF6YmpnbG96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI3NzYyMjcsImV4cCI6MjA0ODM1MjIyN30.u1rQE6zwBFTaOdejQ9Pmz5FAeuJbQKjNZBBaAyrICMo';

export const supabase = createClient(supabaseUrl, supabaseKey);
