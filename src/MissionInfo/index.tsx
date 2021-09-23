import React from 'react'

import { useMissionInfoQuery } from "../generated/graphql"
import MissionInfo from './MissionInfo';

function MissionInfoContainer() {
    
 const { data, loading, error } = useMissionInfoQuery({
    variables:{ 
        
    },
  });
  if(loading)
    return<h1>loading data</h1>
    
    if(error || !data)
    return<h1>error hai</h1>
    console.log(data)
    return (
        <div>
            <MissionInfo data={data} />
        </div>
    )
}

export default MissionInfoContainer
