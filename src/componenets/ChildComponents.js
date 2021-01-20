import React from 'react'

function ChildComponents(props) {
    return ( 
        <div>
            <button onClick={() =>props.greetHandler('child')}>Greet Parent</button>            
        </div>
    )
}
{/* paremetresiz olarak arrow function ile gönderiliyor */}
{/* burada paremetre olarak props verilmez ise hata üretir */}
export default ChildComponents