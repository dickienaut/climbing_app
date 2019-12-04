import React from 'react'

const MyClimbs = (props) => {
 return(<ul>
       {props.climbs.map(climb => {
           return <li>{climb.name}</li>
       })}
     </ul>)
}

export default MyClimbs;