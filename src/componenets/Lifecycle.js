import React, {Component} from 'react'
import Lifecycleb from './Lifecyleb'

class Lifecycle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name : 'Faruk'
        }
        console.log('lifecyle contructor')
    }

    static getDerivedStateFromProps(props,state) {
        console.log('lifecycle  getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('lifecyle  componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('lifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('lifecycle getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate() {
        console.log('lifecyle componentDidUpdate')
    }
    changeState = () => {
        this.setState({
            name: 'Codeevolution'
        })
    }

    render(){
        console.log('lifecycle render ')
        return(
            <div> 
                <div>lifecycle render method</div>
                <button onClick={this.changeState}>change state </button>
                <Lifecycleb/>
            </div>
        )
    }
}

export default Lifecycle