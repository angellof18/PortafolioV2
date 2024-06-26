import React, { useState } from 'react'
import { TopPanel } from './TopPanel'
import { Navbar } from './Navbar'

export const Skills = () => {
    const [loading, setLoading] = useState(true)

    const handleImageLoading = () => {
        setLoading(false)
    }

    return (
        <>
            <section className="mx-5 mb-5">
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
                                                <div className={`image is-64x64 has-text-centered ${loading && 'is-skeleton'}`} onLoad={handleImageLoading}>
                                                    <img src="./icons/html.webp" alt="HTML" />
                                                </div>
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
                                                <div className={`image is-64x64 has-text-centered ${loading && 'is-skeleton'}`} onLoad={handleImageLoading}>
                                                    <img src="./icons/css.webp" alt="CSS" />
                                                </div>
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
                                                <div className={`image is-64x64 has-text-centered ${loading && 'is-skeleton'}`} onLoad={handleImageLoading}>
                                                    <img src="./icons/js.webp" alt="Javascript" />
                                                </div>
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
                                                <div className={`image is-64x64 has-text-centered ${loading && 'is-skeleton'}`} onLoad={handleImageLoading}>
                                                    <img src="./icons/mysql.webp" alt="MySQL" />
                                                </div>
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
                                                <div className={`image is-64x64 has-text-centered ${loading && 'is-skeleton'}`} onLoad={handleImageLoading}>
                                                    <img src="./icons/node.webp" alt="Nodejs" />
                                                </div>
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
                                                <div className={`image is-64x64 has-text-centered ${loading && 'is-skeleton'}`} onLoad={handleImageLoading}>
                                                    <img src="./icons/react.webp" alt="React" />
                                                </div>
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
                                                <div className={`image is-64x64 has-text-centered ${loading && 'is-skeleton'}`} onLoad={handleImageLoading}>
                                                    <img src="./icons/github.webp" alt="Github" />
                                                </div>
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
                                                <div className={`image is-64x64 has-text-centered ${loading && 'is-skeleton'}`} onLoad={handleImageLoading}>
                                                    <img src="./icons/python.webp" alt="Python" />
                                                </div>
                                            </div>
                                            <div className="column">
                                                <p className='has-text-weight-medium'>Python</p>
                                                <span className="tag is-small is-success is-rounded">Principiante</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cell">
                                    <div className="box has-text-centered" data-aos="fade-up">
                                        <div className="columns is-centered">
                                            <div id='img' className="column is-one-third">
                                                <div className={`image is-64x64 has-text-centered ${loading && 'is-skeleton'}`} onLoad={handleImageLoading}>
                                                    <img src="./icons/next.webp" alt="NextJS" />
                                                </div>
                                            </div>
                                            <div className="column">
                                                <p className='has-text-weight-medium'>Next.js</p>
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
