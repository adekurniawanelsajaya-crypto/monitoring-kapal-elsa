import { createClient }
from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl =
'https://plvhtlswyngkpxghnepw.supabase.co'

const supabaseKey =
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsdmh0bHN3eW5na3B4Z2huZXB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkzMjIzNjgsImV4cCI6MjA5NDg5ODM2OH0.3msJdL6sz3NGG8Of-QcAxN5BRlKnBZF3Yjgbvta7tLo'

const supabase = createClient(
  supabaseUrl,
  supabaseKey
)

window.supabase = supabase

console.log("Supabase Connected")