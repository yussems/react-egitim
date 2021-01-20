import React, {Component} from 'react'

class Lifecycleb extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name : 'Faruk'
        }
        console.log('lifecyleb contructor')
    }

    static getDerivedStateFromProps(props,state) {
        console.log('lifecycleb  getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('lifecyleb  componentDidMount')
    }
    shouldComponentUpdate() {
        console.log('lifecycleb shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('lifecycleb getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate() {
        console.log('lifecyleb componentDidUpdate')
    }

    render(){
        console.log('lifecycleb render ')
        return(
            <div> 
                lifecycleb render method
            </div>
        )
    }
}

export default Lifecycleb