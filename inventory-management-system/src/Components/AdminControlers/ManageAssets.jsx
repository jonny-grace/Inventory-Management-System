import React from 'react'
import Assets from './Assets'
import CreateAsset from './CreateAsset'
import {useNavigate} from 'react-router-dom'

function ManageAssets() {
  const navigate = useNavigate()
  return (
    <div>
      <div>
      <h3>List of All Assets</h3>
     <button className='add-button' onClick={()=>{navigate('/manageassests/createasset')}}>Add New Asset</button>
      </div>
     
     <div  className='assets box-border'>
    <Assets number={1}/>
    <Assets number={2}/>
    <Assets number={3}/>
    <Assets number={4}/>
    <Assets number={5}/>
     
     </div>
    </div>
  )
}

export default ManageAssets