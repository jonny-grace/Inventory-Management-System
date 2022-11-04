
import React from 'react'
import Incidents from './Incidents'

import {useNavigate} from 'react-router-dom'

function ManageIcidents() {
  const navigate = useNavigate()
  return (
    <div>
      <div>
      <h3>List of All Incidentes</h3>
     <button className='add-button' onClick={()=>{navigate('/manageassests/createasset')}}>Add New Incident</button>
      </div>
     
     <div  className='assets box-border'>
    <Incidents number={'incident 1'}/>
    <Incidents number={'incident 2'}/>
    <Incidents number={'incident 3'}/>
    <Incidents number={'incident 4'}/>
    <Incidents number={'incident 5'}/>
     
     </div>
    </div>
  )
}

export default ManageIcidents