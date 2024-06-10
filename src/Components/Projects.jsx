import React from 'react'
import { Meetus } from './Projects/Meetus'
import { Signal_clon } from './Projects/Signal_clon'
import { TopPanel } from './TopPanel'

export const Projects = () => {
    return (
        <section className='section'>
            <div className="columns is-centered">
                <div className="column is-12">
                    <TopPanel titulo={'Proyectos'} />
                    <br />
                    <div className="fixed-grid has-2-cols-desktop has-1-cols-mobile">
                        <div className="grid">
                            <div className="cell">
                                <Meetus />
                            </div>
                            <div className="cell">
                                <Signal_clon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
