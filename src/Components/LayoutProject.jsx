import React from 'react'
import ProjectInfo from './ProjectInfo'

export const LayoutProject = () => {
    const data = ProjectInfo()

    return (
        <>
            <div className="fixed-grid has-2-cols-desktop has-1-cols-mobile">
                <div className="grid">

                    {
                        data.map((item, index) => {
                            return (
                                <div key={index} className="cell">
                                    <div className="box">
                                        <div className="content my-4">
                                            <p className="is-size-5 has-text-weight-medium">{item.title}</p>
                                        </div>
                                        <div className="content">
                                            <div className="tags">
                                                {
                                                    item.tags.map((val, i) => {
                                                        return (
                                                            <span key={i} className="tag is-dark">{val}</span>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <figure className="image is-16by9">
                                                <img className='img-project' src={item.image} alt="" />
                                            </figure>
                                            <p className='mt-3'>Login con variables de sesión y validación de datos.</p>
                                        </div>
                                        <div className="buttons my-3">
                                            <a href={item.web} target='_blank' className=" button is-link">
                                                <i className="bi bi-globe" />
                                                <span className='ml-3'>Desmostración</span>
                                            </a>
                                            <a href={item.repo} target='_blank' className="button is-link is-outlined">
                                                <i className="bi bi-github" />
                                                <span className='ml-3'>GitHub</span>
                                            </a>
                                        </div>
                                    </div >
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}
