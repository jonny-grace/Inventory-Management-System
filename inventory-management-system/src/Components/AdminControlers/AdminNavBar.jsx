import React from 'react'
import {NavLink} from 'react-router-dom'

function AdminNavBar() {
  return (
    <nav className='admin-content'>
      <NavLink to='manageassets' className='navlink' >Manage Assets</NavLink>
    <NavLink to='manageicidents' className='navlink' >Manage Incidents</NavLink>
    <NavLink to='manageusers' className='navlink' >Manage User</NavLink>
    
</nav>
  )
}

export default AdminNavBar