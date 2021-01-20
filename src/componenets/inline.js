import React from 'react'

const heading = {
    fontSize:'23px',
    color:'green'
}

function Inline() {
    return(
        <div>
            <h1 style={heading}>Inline</h1>
            <h1 className='error'>eror</h1>
            
        </div>
    )
}


export default Inline