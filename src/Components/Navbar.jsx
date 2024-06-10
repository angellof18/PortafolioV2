import React, { useState } from 'react'

export const Navbar = ({ setPage, page }) => {
    const [darkTheme, setDarkTheme] = useState(false)

    const toggleTheme = () => {
        setDarkTheme(!darkTheme)
        document.documentElement.classList.toggle('theme-dark')
    }

    return (
        <div className="py-2 tabs navbar is-fixed-top is-toggle is-toggle-rounded is-centered is-hidden-desktop is-hidden-tablet is-hidden-widescreen is-hidden-fullhd">
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
                        <span className={`icon ${darkTheme ? 'has-text-warning' : 'has-text-white'}`}>
                            {darkTheme ?
                                <i className="bi bi-sun-fill"></i>
                                :
                                <i className="bi bi-moon-fill"></i>
                            }
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    )
}
