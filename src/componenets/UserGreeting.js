import React, {Component} from 'react'

class UserGreeting extends Component {
   
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: true

        }
    }
   // render() {
   //     return (
   //         this.state.isLoggedIn ?
   //         <div> hola seniora</div> :
   //         <div> hola seniorita</div>
   //     )
   // }
    render() {
        return this.state.isLoggedIn && <div>hello world again me </div>
    }

    // yöntem 3 
  // render() {
  //     let message
  //     if (this.state.isLoggedIn) {
  //        message = <div>welcome deneme ev sahibi </div>
  //     }else {
  //        message = <div>welcome misafir </div>
  //     }
  //     return <div>{message}</div>
  // }

   //yöntem2
  //  render() {
  //      if(this.state.isLoggedIn) {
  //          return(
  //              <div>welcome faruk türkoğlu</div>
  //          )
  //      }else{
  //          return(
  //              <div>welcome guest</div>
  //          )
  //      }
  //    yöntem 1 
//        return (
//            <div>
//                <div>welcome faruk türkoğlu hi</div>
//                <div>welcome faruk türkoğlu hi</div>
//            </div>
//            
//             )
 }


export default UserGreeting
