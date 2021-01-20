import React, { Component } from 'react'
import UpdatedComponen from './withCOunter'

class ClickCounter extends Component {

    
    render() {
        
        const { count,incerementCount }  = this.props
        return (
            <div>
                
                <button onClick={incerementCount}> Click {count} Times</button>
            </div>
        )
    }
}

export default UpdatedComponen(ClickCounter)
