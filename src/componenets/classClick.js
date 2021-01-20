import React, { Component } from 'react'


class Clickfunc extends Component {
    clickHand() {
        console.log('tıqladın')
    }
    render () {
        return (
            <div>
                <button onClick={this.clickHand}>click</button>
            </div>
        )
    }
}
{/*burada class ile click eventi oluşturuduk ama önemli detay attributtu this ile verilir this.clickHand */}
export default Clickfunc