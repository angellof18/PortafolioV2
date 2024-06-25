import React, { useState } from 'react'

export const Signal_clon = () => {
    const [loading, setLoading] = useState(true)

    const handleImageLoading = () => {
        setLoading(false)
    }

    return (
        <div className="box">
            <div className="content my-4">
                <p className="is-size-5 has-text-weight-medium">Signal (clon) - Plantilla basada en Web de Signal</p>
            </div>
            <div className="content">
                <div className="tags">
                    <span className="tag is-dark">React</span>
                    <span className="tag is-dark">BulmaCSS</span>
                    <span className="tag is-dark">CSS</span>
                    <span className="tag is-dark">HTML</span>
                </div>
                <figure className="image is-16by9">
                    <img className='img-project' src="/Projects/Signal.webp" alt="" />
                </figure>
                <p className='mt-3'>Plantilla basada en la página web de Signal, desarrollado utilizando principalmente el framework BulmaCSS.</p>
            </div>
            <div className="buttons my-3">
                <a href='https://signal-clon.onrender.com/' target='_blank' className=" button is-link">
                    <i className="bi bi-globe" />
                    <span className='ml-3'>Desmostración</span>
                </a>
                <a href='https://github.com/angellof18/Signal_clon' target='_blank' className="button is-link is-outlined">
                    <i className="bi bi-github" />
                    <span className='ml-3'>GitHub</span>
                </a>
            </div>
        </div >
    )
}
