import React, { useState } from 'react'
import styles from '../../Components/Styles/style.module.css'

export const Navbar = ({ setPage, page }) => {
    const [active, setActive] = useState(false)

    const toggleActive = () => {
        setActive(!active)
    }

    const handleMenu = (e) => {
        setPage(e)
        toggleActive()
    }

    return (
        <>
            <nav className="navbar is-fixed-top has-shadow is-hidden-desktop is-hidden-tablet is-hidden-widescreen is-hidden-fullhd">
                <div className="navbar-brand">
                    <div className="navbar-item">
                        <p className="is-size-4-desktop is-size-4-tablet is-size-4-fullhd is-size-4-widescreen is-size-5-mobile">PORTAFOLIO - Angel Arteaga</p>
                    </div>
                    <a className="navbar-burger"
                        onClick={toggleActive}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </div>
            </nav>
            <div className={`quickview ${active && 'is-active'}`}>
                <header className="quickview-header">
                    <p className="title">MENU</p>
                    <span className='delete' onClick={toggleActive}></span>
                </header>
                <div className="quickview-body">
                    <div className="quickview-block">
                        <aside className="menu">
                            <ul className="menu-list">
                                <li>
                                    <a className={`${page == 'About' && 'is-active active' && styles.active}`} onClick={() => handleMenu('About')}>Acerca de mí</a>
                                </li>
                                <li>
                                    <a className={`${page == 'Skills' && 'is-active active' && styles.active}`} onClick={() => handleMenu('Skills')}>Habilidades</a>
                                </li>
                                <li>
                                    <a className={`${page == 'Projects' && 'is-active active' && styles.active}`} onClick={() => handleMenu('Projects')}>Proyectos</a>
                                </li>
                                <li>
                                    <a className={`${page == 'Contact' && 'is-active active' && styles.active}`} onClick={() => handleMenu('Contact')}>Contacto</a>
                                </li>
                            </ul>
                        </aside>
                    </div>
                </div>
                <div className="quickview-footer">
                    <div className="buttons">
                        <button className="button is-small is-black" onClick={() => window.open('/cv.pdf', '_blank')}>
                            <span className="icon-is-small">
                                <i className="bi bi-download"></i>
                            </span>
                            <span className='ml-2'>Descargar CV</span>
                        </button>
                    </div>
                </div>
            </div>
        </>

    )
}
