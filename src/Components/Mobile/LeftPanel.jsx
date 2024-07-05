import React from 'react'
import styles from '../../Components/Styles/style.module.css'

export const LeftPanel = ({ setPage, page }) => {

    return (
        <div className='flex-content'>
            <div className="flex-item">
                <figure className="image is-128x128 mt-4">
                    <img className="avatar is-rounded" src="/avatar.webp" alt="" />
                </figure>
                <main className="menu mt-6">
                    <ul className="menu-list">
                        <li><a className={`${page == 'About' ? 'is-active' && styles.active : ''} ${styles.side}`} onClick={() => setPage('About')}>Acerca de mí</a></li>
                        <li><a className={`${page == 'Projects' ? 'is-active' && styles.active : ''} ${styles.side}`} onClick={() => setPage('Projects')}>Proyectos</a></li>
                        <li><a className={`${page == 'Skills' ? 'is-active' && styles.active : ''} ${styles.side}`} onClick={() => setPage('Skills')}>Habilidades</a></li>
                        <li><a className={`${page == 'Contact' ? 'is-active' && styles.active : ''} ${styles.side}`} onClick={() => setPage('Contact')}>Contacto</a></li>
                    </ul>
                </main>
            </div>
            <div className="additional-content">
                <div className="buttons">
                    <a className="button is-small" onClick={() => window.open('/cv.pdf', '_blank')}>
                        <span className="icon-is-small">
                            <i className="bi bi-download"></i>
                        </span>
                        <span className='ml-2'>Descargar CV</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
