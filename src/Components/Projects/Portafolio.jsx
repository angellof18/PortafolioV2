import React from 'react'

export const Portafolio = () => {
    return (
        <div className="box">
            <div className="header my-4">
                <p className="is-size-5 has-text-weight-medium">Portafolio - Mi portafolio personal</p>
            </div>
            <div className="content">
                <div className="tags">
                    <span className="tag is-dark">React</span>
                    <span className="tag is-dark">HTML</span>
                    <span className="tag is-dark">CSS</span>
                    <span className="tag is-dark">BulmaCSS</span>
                </div>
                <figure className="image is-16by9">
                    <img className='img-project' src="/Projects/Portafolio.webp" alt="" />
                </figure>
                <p className='mt-3'>Portafolio personal con mis proyectos elaborados.</p>
            </div>
            <div className="buttons my-3">
                <a href='https://portafolio-arteaga.onrender.com/' target='_blank' className=" button is-link">
                    <i className="bi bi-globe" />
                    <span className='ml-3'>Desmostración</span>
                </a>
                <a href='https://github.com/angellof18/PortafolioV2' target='_blank' className="button is-link is-outlined">
                    <i className="bi bi-github" />
                    <span className='ml-3'>GitHub</span>
                </a>
            </div>
        </div >
    )
}
