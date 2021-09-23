import React from 'react'
import {MissionInfoQuery} from "./../../generated/graphql"

interface Props{
    data:  MissionInfoQuery 

}

const MissionList:React.FC<Props> = ({data})=> {
    return (
        <div>
            <ol>
                {data.launches?.map((launchObj,ind)=>{
                     return <li key={ind}>
                        {launchObj?.mission_name}

                    </li>
                    


                })}

            </ol>
        </div>
    )
}

export default MissionList
