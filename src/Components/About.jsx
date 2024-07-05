import React, { useState } from 'react'
import { TopPanel } from './TopPanel'

export const About = () => {

    return (
        <>
            <section className="mx-5 my-5">
                <div className="columns">
                    <div className="column is-12">
                        <TopPanel titulo={'Acerca de mí'} />
                        <br />

                        <div className="columns">
                            <div className="column is-10">
                                <div className="columns is-vcentered">
                                    <div className="column is-two-fifth">
                                        <p className='has-text-weight-medium is-size-6'>DESARROLLADOR WEB</p>
                                    </div>
                                    <div className="column">
                                        <p className="tag is-small is-rounded" style={{background:'#B0BEC5'}}>Disponible para trabajar</p>
                                    </div>
                                </div>
                                <p className='mt-5 has-text-weight-light'>Soy estudiante autodidacta de desarrollo web, enfocado en programación frontend y cursando la carrera de Ingeniería en Sistemas Computacionales. Aspiro a obtener un empleo en el campo del desarrollo web para adquirir experiencia y ampliar mis conocimientos, fortaleciendo así mi carrera profesional.</p>
                                <p className='has-text-weight-light'>He participado en proyectos académicos que involucran bases de datos relacionales como MySQL y MariaDB, así como en el análisis de datos con Python. Además, tengo experiencia en el desarrollo de páginas web utilizando frameworks como Bootstrap y BulmaCSS."</p>

                                <p className="has-text-weight-medium is-size-6 mt-5">HABILIDADES TECNICAS</p>
                                <ul className='has-text-weight-light'>
                                    <li className='mt-3'>*Disponibilidad</li>
                                    <li>*Autodidacta</li>
                                    <li>*Responsable</li>
                                    <li>*Trabajo en equipo</li>
                                </ul>
                                <div className="buttons mt-6">
                                    <a href="https://github.com/angellof18" target='_blank' className="button is-black">
                                        <i className="bi bi-github"></i>
                                        <span className="ml-2">GitHub</span>
                                    </a>
                                    <a href="mailto:arteaga.angel.1720@hotmail.com" className="button is-black is-outlined">
                                        <i className="bi bi-envelope-fill"></i>
                                        <span className="ml-3">Correo</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
