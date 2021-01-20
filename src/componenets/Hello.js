import React from 'react'

const Hello = () => {
   /* return (
        <div className ='dummyClass'>
         <p>Hello Again this is jsx syntax</p>
        </div>
    )
*/
    return React.createElement('div',
    {id:'hello'},
    React.createElement('h1',null,'hello faruk'))
}

export default Hello