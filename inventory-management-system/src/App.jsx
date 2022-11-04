import { Route, Routes } from 'react-router-dom'
import './App.css'

import AdminPage from './Components/AdminPage'
import Login from './Components/Login'
import UserPage from './Components/UserPage'
import NotFound from './Components/NotFound'
import CreateAsset from './Components/AdminControlers/CreateAsset'
import ManageAssets from './Components/AdminControlers/ManageAssets'


function App() {
 

  return (
    <div className="App">
      <h1>Inventory Management System</h1>
      <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='*' element={<NotFound/>}/>
    <Route path='admin/*' element={<AdminPage />}>
    <Route index element={<ManageAssets/>}/>
    <Route path='manageassets/*' element={<ManageAssets />}></Route>
      </Route>
    <Route path='createasset' element={<CreateAsset />}/>
    <Route path='*' element={<NotFound/>}/>
    <Route path='user'  element={<UserPage />}/>
    
  </Routes>
      {/* <Login /> */}
    </div>
  )
}

export default App
