import React, { Component } from 'react'
import UpdatedComponen from './withCOunter'

class HoverCounter extends Component {

    render() {
        const {count,incerementCount}  = this.props
        return (
            <div>
                <h2 onMouseOver={incerementCount}>hovered {count} times</h2>
            </div>
        )
    }
}

export default UpdatedComponen(HoverCounter)
