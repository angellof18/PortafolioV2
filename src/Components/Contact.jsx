import React from 'react'
import { TopPanel } from './TopPanel'
import { Navbar } from './Navbar'

export const Contact = () => {
    return (
        <>
            <section className="mx-5">
                <div className="columns">
                    <div className="column is-12">
                        <TopPanel titulo={'Contacto'} />
                        <br />
                        <form action="https://formspree.io/f/xdoqqajk" method='POST' className="form">
                            <div className="field">
                                <label className="label">Nombre</label>
                                <p className="control has-icons-left">
                                    <input type="text" className="input" name='Name' required />
                                    <span className="icon is-small is-left">
                                        <i className="bi bi-people-fill"></i>
                                    </span>
                                    <span className="help">Ingresa tu nombre</span>
                                </p>
                            </div>

                            <div className="field">
                                <label className="label">Correo</label>
                                <p className="control has-icons-left">
                                    <input type="email" placeholder='Correo' className="input" name='Email' required />
                                    <span className="icon is-small is-left">
                                        <i className="bi bi-at"></i>
                                    </span>
                                    <span className="help">Ingresa tu correo electronico</span>
                                </p>
                            </div>

                            <div className="field">
                                <label className="label">Descripcion</label>
                                <div className="control">
                                    <textarea className='textarea' placeholder='Mensaje' name='Message' required></textarea>
                                </div>
                            </div>

                            <div className="field">
                                <div className="control">
                                    <button type='submit' className='button is-dark'>
                                        <span className="icon">
                                            <i className="bi bi-send-fill"></i>
                                        </span>
                                        <span className='ml-3'>Enviar</span>
                                    </button>
                                </div>
                            </div>

                            <input type="hidden" name='_captcha' value={'false'} />
                        </form>
                        <div className="field mt-6">
                            <label className="label">Trabajemos juntos</label>
                            <div className="control">
                                <div className="field has-addons">
                                    <p className="control">
                                        <input className="input" type="text" value="arteaga.angel.1720" disabled />
                                    </p>
                                    <p className="control">
                                        <a className="button is-static">
                                            @hotmail.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
