import React, { useState } from 'react'
import { Footer } from './Footer'

export const LeftPanel = ({ setPage, page }) => {
    const [darkTheme, setDarkTheme] = useState(false)

    const toggleTheme = () => {
        setDarkTheme(!darkTheme)
        document.documentElement.classList.toggle('theme-dark')
    }

    return (
        <div className='flex-content'>
            <div className="flex-item">
                <figure className="image is-128x128">
                    <img className="avatar is-rounded" src="/avatar.png" alt="" />
                </figure>
                <main className="menu mt-6">
                    <ul className="menu-list">
                        <li><a className={`${page == 'About' && 'is-active'}`} href="#" onClick={() => setPage('About')}>Acerca de mí</a>
                        <ul>
                            <li>
                                <a onClick={() => window.open('/cv.pdf', '_blank')}>Descargar CV</a>
                            </li>
                        </ul>
                        </li>
                        <li><a className={`${page == 'Projects' && 'is-active'}`} href="#" onClick={() => setPage('Projects')}>Proyectos</a></li>
                        <li><a className={`${page == 'Skills' && 'is-active'}`} href="#" onClick={() => setPage('Skills')}>Habilidades</a></li>
                        <li><a className={`${page == 'Contact' && 'is-active'}`} href="#" onClick={() => setPage('Contact')}>Contacto</a></li>
                    </ul>
                </main>
            </div>
            <div className="additional-content">
                <button className={`button is-rounded ${darkTheme ? 'is-warning' : 'is-dark'}`}
                    onClick={toggleTheme}>
                    <span className="icon is-small">
                        {darkTheme ?
                            <i className="bi bi-sun-fill"></i>
                            :
                            <i className="bi bi-moon-fill"></i>
                        }

                    </span>
                    <span>{darkTheme ? 'Tema claro' : 'Tema oscuro'}</span>
                </button>
            </div>
        </div>
    )
}
