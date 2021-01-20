import React, { Component } from 'react'
import PureComp from './PureComp';
import RegComp from './regComp';
import Memo from './Memo';

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'faruk'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name:'faruk'
            })
        }, 2000);
    }
    
    render() {
        console.log('parent')
        return (
            <div>
                {/*<RegComp name={this.state.name}/>*/}
                {/*<PureComp name={this.state.name}/>*/}
                <Memo name={this.state.name}/>
                Parent Component
            </div>
        )
    }
}

export default ParentComp
