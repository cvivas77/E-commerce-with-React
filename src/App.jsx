import { useState } from 'react'
import { HashRouter,  Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import ProductdDetail from './pages/ProductdDetail'
import Purchases from './pages/Purchases'
import Login from './pages/Login'
import NavBar from './components/NavBar'
import LoadingScreen from './components/LoadingScreen'
import { useSelector } from 'react-redux'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {

  const isLoading = useSelector(state => state.isLoading)

  return (
    <HashRouter>
      <NavBar />
      {isLoading && <LoadingScreen />}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/productd/:id' element={<ProductdDetail/>} />
        <Route path='/login' element={<Login/>}/>
        <Route element={<ProtectedRoutes />}>
          <Route path='/purchases' element={<Purchases/>} />
        </Route>
      </Routes>
      
    </HashRouter>

  )
}

export default App
