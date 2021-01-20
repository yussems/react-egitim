import React from 'react'
/*
function Greet() {
    return <h1>Hello Faruk</h1>
}
*/
const Greet = probs => {
    const {name,heroName} = probs
    //props.name ='faruk' hata verecek kod yapısı
    return (
        <div>
            {/* burada name i çağırmanın3 yolu var değişken atamak paremetre vermek probs kullanmak */}
            <h1>
                Faruk {name} a.k.a {heroName} deneme
            </h1>
            
        </div>
    ) 
}

export default Greet