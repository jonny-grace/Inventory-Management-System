import React from 'react'
import {useNavigate} from'react-router-dom'
import AdminNavBar from './AdminControlers/AdminNavBar'
import ManageUsers from './AdminControlers/manageUsers'
import ManageIcidents from './AdminControlers/ManageIcidents'
import ManageAssets from './AdminControlers/ManageAssets'


import { Route, Routes } from 'react-router-dom'
import CreateAsset from './AdminControlers/CreateAsset'
import NotFound from '../Components/NotFound'
function AdminPage() {
    const navigate= useNavigate()
  return (
    
    <div className='admin-page box-border'>
        <h2>Admin Page</h2>
        <AdminNavBar />
        
    <Routes>
      
    <Route path='manageusers' element={<ManageUsers />}/>
    <Route path='manageicidents' element={<ManageIcidents />}/>
    <Route path='manageassets/*' element={<ManageAssets />}>
    <Route path='createasset' element={<CreateAsset />}/>
    
    </Route>
    <Route path='createasset' element={<CreateAsset />}/>
    {/* <Route path='*' element={<NotFound/>}/>
     */}
  </Routes>
        
       
        

    </div>
  )
}

export default AdminPage