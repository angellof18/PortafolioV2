import React, { useState } from 'react'

export const Meetus = () => {
    const [loading, setLoading] = useState(true)

    const handleImageLoading = () => {
        setLoading(false)
    }

    return (
        <div className="card">
            <div className="card-header">
                <p className="card-header-title">Meetus - Chat con Socket.io</p>
                <div className="card-header-icon">
                    <div className="tags">
                        <span className="tag is-dark">BulmaCSS</span>
                        <span className="tag is-dark">Socket.io</span>
                        <span className="tag is-dark">MySQL</span>
                    </div>
                </div>
            </div>
            <div className="card-content">
                <div className="content">
                    <div className={`image is-16by9 ${loading && 'is-skeleton'}`} onLoad={handleImageLoading}>
                        <img className='img-project' src="/Projects/Meetus.png" alt="" />
                    </div>
                    <p className='mt-3'>"Meetus" es una aplicación de chat web que utiliza Socket.io para facilitar la comunicación en tiempo real.</p>
                </div>
            </div>
            <div className="card-footer">
                <a href="https://meetus-d2da.onrender.com/" target='_blank' className="card-footer-item">
                    <span icon>
                        <i className="bi bi-globe" />
                    </span>
                    <span className='ml-2'>Demo</span>
                </a>
                <a href="https://github.com/angellof18/Meetus" target='_blank' className="card-footer-item">
                    <span icon>
                        <i className="bi bi-git" />
                    </span>
                    <span className='ml-2'>GitHub</span>
                </a>
            </div>
        </div>
    )
}

