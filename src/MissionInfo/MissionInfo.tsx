import React from 'react'
import {MissionInfoQuery } from "../generated/graphql"


interface Props{
    data : MissionInfoQuery

}

const MissionInfo:React.FC<Props> = ({data})=> {
    console.log(data)
    return (
        <div>
            <h3>Mission Detail</h3>
           {JSON.stringify(data)}
        </div>
    )
}

export default MissionInfo