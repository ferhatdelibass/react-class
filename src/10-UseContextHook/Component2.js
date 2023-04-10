import React from 'react'

const Component2 = (user) => {
    return (
        <div>
            <h1>Component2</h1>
            <Component3 user={user}/>
        </div>
    )
}
export default Component2