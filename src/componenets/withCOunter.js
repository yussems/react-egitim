import React from 'react'

const UpdatedComponen = (OriginalComponent) => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        incerementCount= () => {
            this.setState(prevState => {
                return { count :prevState.count + 1}
            })
        }
        render() {
            return <OriginalComponent count={this.state.count} incerementCount={this.incerementCount}/>
        }
    }
    return NewComponent

} 
export default UpdatedComponen