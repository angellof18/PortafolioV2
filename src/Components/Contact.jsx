import React from 'react'
import { TopPanel } from './TopPanel'

export const Contact = () => {
    return (
        <section className="section">
            <div className="columns">
                <div className="column is-12">
                    <TopPanel titulo={'Contacto'} />
                    <br />
                    <form action="https://formsubmit.co/5782711d06bfc79dab966069f374f92c" method='POST' className="form">
                        <div className="field">
                            <label className="label">Nombre</label>
                            <p className="control has-icons-left">
                                <input type="text" className="input" name='name' required />
                                <span className="icon is-small is-left">
                                    <i className="bi bi-people-fill"></i>
                                </span>
                                <p className="help">Ingresa tu nombre</p>
                            </p>
                        </div>

                        <div className="field">
                            <label className="label">Correo</label>
                            <p className="control has-icons-left">
                                <input type="email" placeholder='Correo' className="input" name='email' required />
                                <span className="icon is-small is-left">
                                    <i className="bi bi-at"></i>
                                </span>
                                <p className="help">Ingresa tu correo electronico</p>
                            </p>
                        </div>

                        <div className="field">
                            <label className="label">Asunto</label>
                            <p className="control has-icons-left">
                                <input type="text" placeholder='Asunto' className="input" name='subject' required />
                                <span className="icon is-small is-left">
                                    <i className="bi bi-bookmark-fill"></i>
                                </span>
                                <p className="help">Asunto del correo</p>
                            </p>
                        </div>

                        <div className="field">
                            <label className="label">Descripcion</label>
                            <div className="control">
                                <textarea className='textarea' placeholder='Mensaje' name='comments' required></textarea>
                            </div>
                        </div>

                        <div className="field">
                            <div className="control">
                                <button type='submit' className="button is-outlined is-link">
                                    <span className="icon">
                                        <i className="bi bi-send-fill"></i>
                                    </span>
                                    <span className='ml-3'>Enviar</span>
                                </button>
                            </div>
                        </div>

                        <input type="hidden" name='_captcha' value={'false'} />
                    </form>
                </div>
            </div>
        </section>
    )
}
