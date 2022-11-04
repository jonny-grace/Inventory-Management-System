import React from 'react'
import { useState } from 'react'
import {Outlet, useNavigate} from 'react-router-dom'
 
function Login() {
  const [acountType,setAcountType] = useState('')
  const [typeChecker,setTypeChecker] = useState(false)
  
  const navigate = useNavigate()
  console.log(acountType)

  function authenticate(e){
    e.preventDefault()
    acountType == '' ? setTypeChecker(true):
    acountType=='admin'?
    navigate('admin') :
    navigate('user')
    
  }
  return (
    <>
    <div className='form-submit'>
    Welcome Please Login
    <form>

    <input type='radio' name='account-type' onChange={()=>{setAcountType('admin')}} value='ADMIN' /> Admin
    <input type='radio' name='account-type' onChange={()=>{setAcountType('user')}}value='USER' /> User
    {typeChecker && <p style={{color:'red'}}>please sellect your account type</p>}
    <br />
    <label>Username</label>
    <input type='text' name='username'/>
    <br />
    <label>Password </label>
    <input type='text' name='username'/>
    <br />
    <button onClick={authenticate}> Login</button>
    </form>
    <Outlet/>
    </div>
    </>
  )
}

export default Login