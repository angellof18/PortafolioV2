import React from 'react'

export const TopPanel = ({ titulo }) => {
    return (
        <div className='mt-4'>
            <p className="is-size-3 is-size-4-mobile has-text-weight-medium animate__animated animate__fadeIn animate__faster">{titulo.toUpperCase()}</p>
        </div>
    )
}
