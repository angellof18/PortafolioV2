import React from 'react'
import { TopPanel } from './TopPanel'

export const Skills = () => {
    return (
        <>
            <section className="section">
                <div className="columns is-centered">
                    <div className="column is-12">
                        <TopPanel titulo={'Habilidades'} />
                        <br />
                        <div className="fixed-grid has-3-cols-desktop has-2-cols-mobile">
                            <div className="grid">
                                <div className="cell">
                                    <div className="box has-text-centered" data-aos="fade-up">
                                        <div className="columns is-centered">
                                            <div id='img' className="column is-one-third">
                                                <figure className='image is-64x64'>
                                                    <img src="./icons/html.png" alt="" />
                                                </figure>
                                            </div>
                                            <div className="column">
                                                <p className='has-text-weight-medium'>HTML</p>
                                                <span className="tag is-small is-rounded is-success">Principiante</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cell">
                                    <div className="box has-text-centered" data-aos="fade-up">
                                        <div className="columns is-centered">
                                            <div id='img' className="column is-one-third">
                                                <figure className='image has-text-centered is-64x64'>
                                                    <img src="./icons/css.png" alt="" />
                                                </figure>
                                            </div>
                                            <div className="column">
                                                <p className='has-text-weight-medium'>CSS</p>
                                                <span className="tag is-small is-success is-rounded">Principiante</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cell">
                                    <div className="box has-text-centered" data-aos="fade-up">
                                        <div className="columns is-centered">
                                            <div id='img' className="column is-one-third">
                                                <figure className='image has-text-centered is-64x64'>
                                                    <img src="./icons/js.png" alt="" />
                                                </figure>
                                            </div>
                                            <div className="column">
                                                <p className='has-text-weight-medium'>Javascript</p>
                                                <span className="tag is-small is-success is-rounded">Principiante</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cell">
                                    <div className="box has-text-centered" data-aos="fade-up">
                                        <div className="columns is-centered">
                                            <div id='img' className="column is-one-third">
                                                <figure className='image has-text-centered is-64x64'>
                                                    <img src="./icons/mysql.png" alt="" />
                                                </figure>
                                            </div>
                                            <div className="column">
                                                <p className='has-text-weight-medium'>MySQL</p>
                                                <span className="tag is-small is-success is-rounded">Principiante</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cell">
                                    <div className="box has-text-centered" data-aos="fade-up">
                                        <div className="columns is-centered">
                                            <div id='img' className="column is-one-third">
                                                <figure className='image has-text-centered is-64x64'>
                                                    <img src="./icons/node.png" alt="" />
                                                </figure>
                                            </div>
                                            <div className="column">
                                                <p className='has-text-weight-medium'>Node JS</p>
                                                <span className="tag is-small is-success is-rounded">Principiante</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cell">
                                    <div className="box has-text-centered" data-aos="fade-up">
                                        <div className="columns is-centered">
                                            <div id='img' className="column is-one-third">
                                                <figure className='image has-text-centered is-64x64'>
                                                    <img src="./icons/react.png" alt="" />
                                                </figure>
                                            </div>
                                            <div className="column">
                                                <p className='has-text-weight-medium'>React</p>
                                                <span className="tag is-small is-success is-rounded">Principiante</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cell">
                                    <div className="box has-text-centered" data-aos="fade-up">
                                        <div className="columns is-centered">
                                            <div id='img' className="column is-one-third">
                                                <figure className='image has-text-centered is-64x64'>
                                                    <img src="./icons/github.png" alt="" />
                                                </figure>
                                            </div>
                                            <div className="column">
                                                <p className='has-text-weight-medium'>Github</p>
                                                <span className="tag is-small is-success is-rounded">Principiante</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cell">
                                    <div className="box has-text-centered" data-aos="fade-up">
                                        <div className="columns is-centered">
                                            <div id='img' className="column is-one-third">
                                                <figure className='image has-text-centered is-64x64'>
                                                    <img src="./icons/python.png" alt="" />
                                                </figure>
                                            </div>
                                            <div className="column">
                                                <p className='has-text-weight-medium'>Python</p>
                                                <span className="tag is-small is-success is-rounded">Principiante</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}