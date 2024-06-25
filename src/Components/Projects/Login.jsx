import React, { useState } from 'react'

export const Login = () => {
    const [loading, setLoading] = useState(true)

    const handleImageLoading = () => {
        setLoading(false)
    }

    return (
        <div className="card">
            <div className="card-header">
                <p className="card-header-title">Login - Variables de sesión</p>
                <div className="card-header-icon">
                    <div className="tags">
                        <span className="tag is-dark">Next JS</span>
                        <span className="tag is-dark">HTML</span>
                        <span className="tag is-dark">CSS</span>
                        <span className="tag is-dark">MySQL</span>
                    </div>
                </div>
            </div>
            <div className="card-content">
                <div className="content">
                    <div className={`image is-16by9 ${loading && 'is-skeleton'}`} onLoad={handleImageLoading}>
                        <img className='img-project' src="/Projects/Login.webp" alt="Variables de sesion" />
                    </div>
                    <div className='mt-3'>Login con variables de sesión y validación de datos.</div>
                </div>
            </div>
            <div className="card-footer">
                <a href="https://login-nextjs-pi.vercel.app/login" target='_blank' className="card-footer-item">
                    <span className='icon'>
                        <i className="bi bi-globe" />
                    </span>
                    <span className='ml-2'>Demo</span>
                </a>
                <a href="https://github.com/angellof18/login-nextjs" target='_blank' className="card-footer-item">
                    <span className='icon'>
                        <i className="bi bi-git" />
                    </span>
                    <span className='ml-2'>GitHub</span>
                </a>
            </div>
        </div>
    )
}
