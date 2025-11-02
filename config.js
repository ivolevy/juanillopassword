// Supabase Configuration
const SUPABASE_URL = 'https://skoxwnlrxotkqncmqkvy.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb3h3bmxyeG90a3FuY21xa3Z5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIwMTA3MDEsImV4cCI6MjA3NzU4NjcwMX0.QP5zE3Gr_L5vQ1F3pXIGLgOLDX9kGmJm0Kc40QljWuY';

// Inicializar Supabase
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

