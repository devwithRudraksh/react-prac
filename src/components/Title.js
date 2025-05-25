import React from 'react'
/* code optimisation tips 
1.props-object */
export default function Title(props) {
  return (
    <div>{props.name}</div>//whenever we get a name from the screen we will pass it to a component here
  )
}
