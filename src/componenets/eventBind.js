import React, {Component} from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message:'hello',
            messageTwo:' Two Hello',
            messageTree:'tree hello',
            messageFour:'four Hello'
        }
        this.clickHandlerTree = this.clickHandlerTree.bind(this)
    }
    clickHandler() {
        this.setState({
            message:'goodBye'
        })
        console.log(this)
        
    }
    clickHandlerTree() {
        this.setState({
            messageTree:'tree goodbye'
        })
        console.log(this)
    }

    clickHandlerTwo () {
        this.setState({
            messageTwo:'Two Good Bye'
        })
        console.log(this)
    }
    clickHandlerFour = () => {
        this.setState({
            messageFour:'4 kere good bye'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <div>{this.state.messageTwo}</div>
                <div>{this.state.messageTree}</div>
                <div>{this.state.messageFour}</div>
                <button onClick={this.clickHandler.bind(this)}>clickle bind(this) ile</button>
                <button onClick={() => this.clickHandlerTwo()}>tıkladın fonksiyon ile</button>
                <button onClick={this.clickHandlerTree}>tıkladın 3 yöntem </button>
                <button onClick={this.clickHandlerFour}>tıkladın 4 yöntem </button>
            </div>
        )
    }
}



{/* 3 yöntemin en iyi olduğu varsayılıyor  */}

{/* burada bind(this) methodu yerine () => fonksiyon çağırışıdı */}
{/* burada bind.this fonkisyonu çağırma işlemi görüldü */}
{/* bind.this olmadan hata kodu üretiyor */}

export default EventBind