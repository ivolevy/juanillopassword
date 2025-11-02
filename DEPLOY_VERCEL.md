# Guía de Despliegue en Vercel

## Pasos para desplegar en Vercel

### Opción 1: Desde la interfaz de Vercel (Recomendado)

1. **Ve a https://vercel.com y crea una cuenta/inicia sesión**

2. **Conecta tu proyecto de GitHub**
   - Haz clic en "Add New Project"
   - Selecciona el repositorio `instagrampassword`
   - Si no lo ves, haz clic en "Adjust GitHub App Permissions" para darle acceso

3. **Configura el proyecto**
   - Framework Preset: Other
   - Root Directory: ./
   - Build Command: Dejar vacío
   - Output Directory: ./

4. **Configura las variables de entorno**
   IMPORTANTE: Antes de hacer deploy, necesitas configurar las variables de entorno:
   
   En la sección "Environment Variables", agrega:
   ```
   VITE_SUPABASE_URL = https://skoxwnlrxotkqncmqkvy.supabase.co
   VITE_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb3h3bmxyeG90a3FuY21xa3Z5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIwMTA3MDEsImV4cCI6MjA3NzU4NjcwMX0.QP5zE3Gr_L5vQ1F3pXIGLgOLDX9kGmJm0Kc40QljWuY
   ```

5. **Haz clic en "Deploy"**
   - Vercel procesará el deployment
   - Te dará una URL temporal y una permanente

### Opción 2: Desde la terminal con Vercel CLI

1. **Instala Vercel CLI**
```bash
npm i -g vercel
```

2. **Inicia sesión en Vercel**
```bash
vercel login
```

3. **Desde el directorio del proyecto**
```bash
vercel
```

4. **Configura las variables de entorno**
```bash
vercel env add VITE_SUPABASE_URL
# Pega: https://skoxwnlrxotkqncmqkvy.supabase.co

vercel env add VITE_SUPABASE_ANON_KEY
# Pega: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb3h3bmxyeG90a3FuY21xa3Z5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIwMTA3MDEsImV4cCI6MjA3NzU4NjcwMX0.QP5zE3Gr_L5vQ1F3pXIGLgOLDX9kGmJm0Kc40QljWuY
```

5. **Despliega**
```bash
vercel --prod
```

### ⚠️ IMPORTANTE: Configura las credenciales

Como `config.js` está en `.gitignore`, necesitas crearlo en Vercel:

**Opción A:** Agregar las credenciales como variables de entorno (NO recomendado para este proyecto simple)

**Opción B:** Simplemente hacer que `config.js` se suba a GitHub con las credenciales (ya que Supabase tiene Row Level Security)

**Opción C:** Crear un archivo `.env` (pero Vercel necesita configuración adicional)

### Recomendación Rápida:

Para simplificar, puedes eliminar `config.js` del `.gitignore` temporalmente para el deployment:

```bash
# Edita .gitignore y quita o comenta la línea:
# config.js
```

Luego haz commit y push:
```bash
git add config.js .gitignore
git commit -m "Add config for deployment"
git push origin main
```

Luego en Vercel simplemente conecta el repo y deploy automático.

## Verificación Post-Deployment

1. Visita tu URL de Vercel
2. Abre la consola del navegador (F12)
3. Ve a la pestaña Network
4. Intenta hacer login
5. Verifica en Supabase Table Editor que los datos se guardaron

## Configuración de Dominio Personalizado

1. En Vercel Dashboard → Settings → Domains
2. Agrega tu dominio personalizado
3. Configura los DNS según las instrucciones

## Actualizaciones Futuras

Cada vez que hagas `git push` a la rama `main`, Vercel automáticamente:
- Detectará los cambios
- Construirá el proyecto
- Desplegará la nueva versión

¡Listo! 🚀

