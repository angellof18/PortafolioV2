import React from 'react'
import { TopPanel } from './TopPanel'

export const About = () => {
    return (
        <section className="section">
            <div className="columns">
                <div className="column is-12">
                    <TopPanel titulo={'Acerca de mí'} />
                    <br />



                    <div className="columns is-centered">
                        <div className="column is-7">
                            <div className="columns is-vcentered">
                                <div className="column is-two-fifth">
                                    <p className="has-text-weight-bold is-size-4">Angel Arteaga</p>
                                    <p>DESARROLLADOR WEB</p>
                                </div>
                                <div className="column">
                                    <p className="tag is-small is-rounded is-success">Disponible para trabajar</p>
                                </div>
                            </div>
                            <p className='mt-5'>Soy estudiante autodidacta de desarrollo web, enfocado en programación frontend y cursando la carrera de Ingeniería en Sistemas Computacionales. Aspiro a obtener un empleo en el campo del desarrollo web para adquirir experiencia y ampliar mis conocimientos, fortaleciendo así mi carrera profesional.</p>
                            <p>He participado en proyectos académicos que involucran bases de datos relacionales como MySQL y MariaDB, así como en el análisis de datos con Python. Además, tengo experiencia en el desarrollo de páginas web utilizando frameworks como Bootstrap y BulmaCSS."</p>
                            <div className="buttons mt-6">
                                <a href="https://github.com/angellof18" target='_blank' className="redes tag is-medium is-rounded is-dark">
                                    <i className="bi bi-github"></i>
                                </a>
                                <a href="mailto:arteaga.angel.1720@hotmail.com" className="redes tag is-medium is-rounded is-dark">
                                    <i className="bi bi-envelope-fill"></i>
                                </a>
                            </div>
                        </div>
                        <div className="column is-hidden-mobile">
                            <figure className="image">
                                <img src="/desarrollo-movil.png" alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}