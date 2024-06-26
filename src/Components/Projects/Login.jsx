import React, { useState } from 'react'

export const Login = () => {
    const [loading, setLoading] = useState(true)

    const handleImageLoading = () => {
        setLoading(false)
    }

    return (
        <div className="box">
            <div className="content my-4">
                <p className="is-size-5 has-text-weight-medium">Login - Variables de sesión</p>
            </div>
            <div className="content">
                <div className="tags">
                    <span className="tag is-dark">Next.js</span>
                    <span className="tag is-dark">MySQL</span>
                    <span className="tag is-dark">HTML</span>
                    <span className="tag is-dark">CSS</span>
                </div>
                <figure className="image is-16by9">
                    <img className='img-project' src="/Projects/Login.webp" alt="" />
                </figure>
                <p className='mt-3'>Login con variables de sesión y validación de datos.</p>
            </div>
            <div className="buttons my-3">
                <a href='https://login-nextjs-pi.vercel.app/login' target='_blank' className=" button is-link">
                    <i className="bi bi-globe" />
                    <span className='ml-3'>Desmostración</span>
                </a>
                <a href='https://github.com/angellof18/login-nextjs' target='_blank' className="button is-link is-outlined">
                    <i className="bi bi-github" />
                    <span className='ml-3'>GitHub</span>
                </a>
            </div>
        </div >
    )
}
