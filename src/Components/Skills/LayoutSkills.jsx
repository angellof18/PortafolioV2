import React, { useState } from 'react'
import SkillsInfo from './SkillsInfo'


export const LayoutSkills = () => {
    const data = SkillsInfo()

    const [loading, setLoading] = useState(true)

    const handleImageLoading = () => {
        setLoading(false)
    }
    return (
        <>
            {
                data.map((item, i) => (
                    <div key={i} className="cell">
                        <div className="box has-text-centered" data-aos="fade-up">
                            <div className="columns is-centered">
                                <div id='img' className="column is-one-third">
                                    <div className={`image is-64x64 has-text-centered ${loading && 'is-skeleton'}`} onLoad={handleImageLoading}>
                                        <img src={item.image} alt="NextJS" />
                                    </div>
                                </div>
                                <div className="column">
                                    <p className='has-text-weight-medium is-size-6'>{item.name}</p>
                                    <span className="tag is-small is-rounded">{item.level}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
