import React from 'react'

function FunctionClick () {
    function clickHand() {
        console.log('button clicked')
    }
    return (
        <div>
            <button onClick={clickHand}>click me </button>
        </div>
    )
} 

{/*mouse event ifadesi function ile kullanma  */}
{/*burada click eventi ikinxi fonksiyon olarak fonksionun altında tanımlandı  */}
export default FunctionClick