import React, { useState } from 'react'
import { Footer } from './Footer'

export const LeftPanel = ({ setPage, page, toggleTheme, darkTheme }) => {
    //const [darkTheme, setDarkTheme] = useState(false)

    /*const toggleTheme = () => {
        setDarkTheme(!darkTheme)
        document.documentElement.classList.toggle('theme-dark')
    }*/

    return (
        <div className='flex-content'>
            <div className="flex-item">
                <figure className="image is-128x128 mt-4">
                    <img className="avatar is-rounded" src="/avatar.webp" alt="" />
                </figure>
                <main className="menu mt-6">
                    <ul className="menu-list">
                        <li><a className={`${page == 'About' && 'is-active'}`} href="#" onClick={() => setPage('About')}>Acerca de mí</a></li>
                        <li><a className={`${page == 'Projects' && 'is-active'}`} href="#" onClick={() => setPage('Projects')}>Proyectos</a></li>
                        <li><a className={`${page == 'Skills' && 'is-active'}`} href="#" onClick={() => setPage('Skills')}>Habilidades</a></li>
                        <li><a className={`${page == 'Contact' && 'is-active'}`} href="#" onClick={() => setPage('Contact')}>Contacto</a></li>
                    </ul>
                </main>
            </div>
            <div className="additional-content">
                <div className="buttons">
                    <button className="button is-link is-light" onClick={() => window.open('/cv.pdf', '_blank')}>
                        <span className="icon-is-small">
                            <i className="bi bi-download"></i>
                        </span>
                        <span className='ml-2'>Descargar CV</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
