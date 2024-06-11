import React from 'react'

export const TopPanel = ({ titulo }) => {
    return (
        <div className='is-hidden-mobile'>
            <p className="is-size-2 is-size-3-mobile has-text-weight-medium animate__animated animate__fadeIn animate__faster">{titulo}</p>
            <hr />
        </div>
    )
}
