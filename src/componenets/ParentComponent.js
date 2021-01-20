
import React, {Component} from 'react'
import ChildComponents from './ChildComponents'

class ParentComponent extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            parentName:'Parent'

        }
        this.greetParent =this.greetParent.bind(this)
    }
    greetParent(demek) {
        alert(`hello ${this.state.parentName} from ${demek}`)
        console.log(this)
    }

    render() {
        return (
            <div>
                <ChildComponents greetHandler = {this.greetParent}/> 
            </div>
        )

    }

    
}
{/* child ile parent / parent ile child iletişimi kurdurduk */}
{/* burada çocuk içeriği içeriye almak için  oluşturulan yöntem sayesinde ekrana button eklendi */}

export default ParentComponent
