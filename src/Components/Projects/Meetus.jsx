import React, { useState } from 'react'

export const Meetus = () => {
    const [loading, setLoading] = useState(true)

    const handleImageLoading = () => {
        setLoading(false)
    }

    return (
        <div className="box">
            <div className="header my-4">
                <p className="is-size-5 has-text-weight-medium">Meetus - Chat con Socket.io</p>
            </div>
            <div className="content">
                <div className="tags">
                    <span className="tag is-dark">React</span>
                    <span className="tag is-dark">MySQL</span>
                    <span className="tag is-dark">Socket.io</span>
                    <span className="tag is-dark">BulmaCSS</span>
                </div>
                <figure className="image is-16by9">
                    <img className='img-project' src="/Projects/Meetus.webp" alt="" />
                </figure>
                <p className='mt-3'>"Meetus" es una aplicación de chat web que utiliza Socket.io para facilitar la comunicación en tiempo real.</p>
            </div>
            <div className="buttons my-3">
                <a href='https://meetus-d2da.onrender.com/' target='_blank' className=" button is-link">
                    <i className="bi bi-globe" />
                    <span className='ml-3'>Desmostración</span>
                </a>
                <a href='https://github.com/angellof18/Meetus' target='_blank' className="button is-link is-outlined">
                    <i className="bi bi-github" />
                    <span className='ml-3'>GitHub</span>
                </a>
            </div>
        </div >
    )
}

