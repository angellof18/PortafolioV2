import React, { useState } from 'react'

export const Signal_clon = () => {
    const [loading, setLoading] = useState(true)

    const handleImageLoading = () => {
        setLoading(false)
    }

    return (
        <div className="card">
            <div className="card-header">
                <p className="card-header-title">Signal (clon) - Plantilla basada en Web de Signal</p>
                <div className="card-header-icon">
                    <div className="tags">
                        <span className="tag is-dark">BulmaCSS</span>
                    </div>
                </div>
            </div>
            <div className="card-content">
                <div className="content">
                    <div className={`image is-16by9 ${loading && 'is-skeleton'}`} onLoad={handleImageLoading}>
                        <img className='img-project' src="/Projects/Signal.webp" alt="Plantilla web" />
                    </div>
                    <p className='mt-3'>Plantilla basada en la página web de Signal, desarrollado utilizando principalmente el framework BulmaCSS.</p>
                </div>
            </div>
            <div className="card-footer">
                <a href="https://signal-clon.onrender.com/" target='_blank' className="card-footer-item">
                    <span icon>
                        <i className="bi bi-globe" />
                    </span>
                    <span className='ml-2'>Demo</span>
                </a>
                <a href="https://github.com/angellof18/Signal_clon" target='_blank' className="card-footer-item">
                    <span icon>
                        <i className="bi bi-git" />
                    </span>
                    <span className='ml-2'>GitHub</span>
                </a>
            </div>
        </div>
    )
}
