import React, {Component} from 'react'

class Message extends Component {
    constructor () {
        super()
        this.state = {
            message : ' Welcome Visotor ',
            deneme :'Haleluya ',
        }
    }

    changeMessage() {
        this.setState({
            message:'Thank you for every try'
        })
    }
    weWill(){
        this.setState((state) => {
            return {deneme:'Allaha inan'}
        });
    }

    render () {
        return (
            <div>
                <h1>
                    {this.state.message}
                </h1>
                <button onClick={() => this.changeMessage()}> denemeye devam</button>
                <h1>
                    {this.state.deneme}
                </h1>
                <button onClick={() => this.weWill()}> react fonkisiyon deneme</button>
                
            </div>
        )
    }
}
export default Message