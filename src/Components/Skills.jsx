import React from 'react'
import { TopPanel } from './TopPanel'
import { LayoutSkills } from './Skills/LayoutSkills'

export const Skills = () => {

    return (
        <>
            <section className="mx-5 my-5">
                <div className="columns is-centered">
                    <div className="column is-12">
                        <TopPanel titulo={'Habilidades'} />
                        <br />
                        <div className="fixed-grid has-3-cols-desktop has-2-cols-mobile">
                            <div className="grid">

                                <LayoutSkills />
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
