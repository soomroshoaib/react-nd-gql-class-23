import React from 'react'
import {useMissionInfoQuery} from './../../generated/graphql'

import MissionList from './MissionList'


function Misscontainer() {
    const {data, error, loading} = useMissionInfoQuery()
    if(loading)
    return<h1>loading data</h1>
    
    if(error || !data)
    return<h1>error hai</h1>
    console.log(data)
    return (
        <div>
            <MissionList   data={data} />
        </div>
    )
}

export default Misscontainer
