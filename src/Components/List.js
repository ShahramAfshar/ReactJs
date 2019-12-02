import React from 'react'
import Persion from './Persion';


export default function List() {
const names=['jafar','sabagh','aranchi']

    const person = [
        {
            id: 1, name: 'sharam', age: 30
        },
        {
            id: 2, name: 'hamed', age: 29
        },
        {
            id: 3, name: 'ali', age: 36
        }
    ]
    const printPerson = person.map(person => <Persion key={person.id} p={person} />);
    const printNames=names.map((name,i)=><h2 key={i}>{i}-{name}</h2>);
    return (
        <div>
            {
                printNames
            }
        </div>
    )
}
