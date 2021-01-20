import React from 'react'
import Person from './Person'
function NameList() {
    const names = ['bruce','clark', 'diana','faruk','diana']
    const persons = [
        {id : 1,
        name:'bruce',
        age:30,
        skill:'react'},
        {id : 2,
        name:'Clark',
        age:24,
        skill:'react'},
        {id : 3,
        name:'Diana',
        age:32,
        skill:'react'}
    ]
    const namelist = names.map((name,index) => <h2 key={index}>{index} {name}</h2>)
    return <div>{namelist}</div>  
}

export default NameList