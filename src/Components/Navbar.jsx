import React, { useState } from 'react'

export const Navbar = ({ setPage, page, text_title }) => {
    const [active, setActive] = useState(false)
    const [darkTheme, setDarkTheme] = useState(false)

    const toggleTheme = () => {
        setDarkTheme(!darkTheme)
        document.documentElement.classList.toggle('theme-dark')
    }

    const toggleActive = () => {
        setActive(!active)
    }

    const handleMenu = (e) => {
        setPage(e)
        toggleActive()
    }

    return (
        <>
            {/*<div className="py-2 tabs navbar is-fixed-top is-toggle is-toggle-rounded is-centered is-hidden-desktop is-hidden-tablet is-hidden-widescreen is-hidden-fullhd">
            <ul>
                <li className={`${page == 'About' && 'is-active'}`}>
                    <a onClick={() => setPage('About')}>About</a>
                </li>
                <li className={`${page == 'Skills' && 'is-active'}`}>
                    <a onClick={() => setPage('Skills')}>Skills</a>
                </li>
                <li className={`${page == 'Projects' && 'is-active'}`}>
                    <a onClick={() => setPage('Projects')}>Projects</a>
                </li>
                <li className={`${page == 'Contact' && 'is-active'}`}>
                    <a onClick={() => setPage('Contact')}>Contact</a>
                </li>
                <li>
                    <a onClick={toggleTheme}>
                        <span className='icon'>
                            {darkTheme ?
                                <i className="bi bi-sun-fill has-text-warning"></i>
                                :
                                <i className="bi bi-moon-fill has-text-info"></i>
                            }
                        </span>
                    </a>
                </li>
            </ul>
        </div>*/}
            <nav className="navbar is-fixed-top has-shadow is-hidden-desktop is-hidden-tablet is-hidden-widescreen is-hidden-fullhd">
                <div className="navbar-brand">
                    <div className="navbar-item">
                        <p className="title">{text_title}</p>
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
                                    <a className={`${page == 'About' && 'is-active'}`} onClick={() => handleMenu('About')}>Acerca de mí</a>
                                </li>
                                <li>
                                    <a className={`${page == 'Skills' && 'is-active'}`} onClick={() => handleMenu('Skills')}>Habilidades</a>
                                </li>
                                <li>
                                    <a className={`${page == 'Projects' && 'is-active'}`} onClick={() => handleMenu('Projects')}>Proyectos</a>
                                </li>
                                <li>
                                    <a className={`${page == 'Contact' && 'is-active'}`} onClick={() => handleMenu('Contact')}>Contacto</a>
                                </li>
                            </ul>
                        </aside>
                    </div>
                </div>
                <div className="quickview-footer">
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
        </>

    )
}
