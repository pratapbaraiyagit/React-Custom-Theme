import React from 'react'

const ProgressBar = ({ bgcolor, progress, height }) => {

    const ParentDiv = {
        height: height,
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
    }

    const ChildDiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius: 40,
        textAlign: 'right'
    }

    return (
        <div style={ParentDiv}>
            <div style={ChildDiv}>
            </div>
        </div>
    )
}

export default ProgressBar;