import React from 'react'
import { TopPanel } from './TopPanel'
import { LayoutProject } from './Projects/LayoutProject'

export const Projects = () => {
    return (
        <>
            <section className='mx-5 my-5'>
                <div className="columns is-centered">
                    <div className="column is-12">
                        <TopPanel titulo={'Proyectos'} />
                        <br />

                        <LayoutProject />
                    </div>
                </div>
            </section>


        </>
    )
}
