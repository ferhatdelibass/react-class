import React from 'react'
import Component2 from './Component2'
const Component1 = ({user}) => {
    return (
        <div><h1>Component1</h1>
        <Component2 user={user}/>
        </div>
    )
}
export default Component1