import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0,
             counttar:0
        }
    }
        increment() {
    //       this.setState({
    //           count: this.state.count + 1
    //       },
    //        () => {
    //            console.log('callback value' ,this.state.count)} )
    //       console.log(this.state.count)
    //       
        this.setState((prevState,props) => ({
            
            count:prevState.count + 1
        }), () => {
            console.log("calback deneme huhuhu ", this.state.count )
        })
        console.log(this.state.count)
    }
        

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    };

    fonkCounter()  {
        this.setState((status) => {
            return {counttar: status.counttar + 1}
        }, () => {console.log('console olması gereken değeri', this.state.counttar )})
        console.log(this.state.counttar)
    };

    fonkCounterFive() {
        this.fonkCounter()
        this.fonkCounter()
        this.fonkCounter()
        this.fonkCounter()
        this.fonkCounter()
    }
    
    
    render() {
        return (
            <div>
                <div>
                    <h1>
                    count - {this.state.count}
                    </h1>
                </div>
                <button onClick={() =>this.incrementFive()}> catch me setState yöntemi incerement</button>
                <div>
                    <h1> count fonk - {this.state.counttar}</h1>
                </div>
                <button onClick={() => this.fonkCounterFive()}>countun fok hali</button>
            </div>
        )
    }
}

export default Counter












