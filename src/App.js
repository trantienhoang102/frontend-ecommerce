import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {routes} from './routes'
import DefaultComponent from './components/DefaultComponent/DefaultComponent'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { isJsonString } from './utils'
import { jwtDecode } from 'jwt-decode'
import * as UserService from './services/UserService'
import { useDispatch } from 'react-redux'
import { updateUser } from './redux/slides/userSlide'

 function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const { storageData, decoded } = handleDecoded()

    if(decoded?.id) {
      handleGetDetailsUser(decoded?.id, storageData)
    }
  },[])

  const handleDecoded = () => {
    let storageData = localStorage.getItem('access_token')
    let decoded = {}
    
    if (storageData && isJsonString(storageData)) {
      storageData = JSON.parse(storageData)
      decoded = jwtDecode(storageData)
    }
    console.log("access-token", storageData)
    console.log("decoded1", decoded)
    return { decoded, storageData }
    
  }

  UserService.axiosJWT.interceptors.request.use(async (config) => {
    const currentTime = new Date()
    const now = currentTime.getTime() /1000
    const { decoded } = handleDecoded()
    console.log("decoded2", decoded)
    if( decoded?.exp < currentTime.getTime() / 1000) {
    console.log("decoded3", decoded)
      const data = await UserService.refreshToken()
      localStorage.setItem('access_token', JSON.stringify(data?.access_token))
      config.headers['token'] = `Beare ${data?.access_token}`
    }
    return config
  }, (err) => {
    return Promise.reject(err)
  })

  const handleGetDetailsUser = async(id, token) => {
    const res = await UserService.getDetailsUser(id, token)
    dispatch(updateUser({...res?.data, access_token: token}))
   }
  

  return (
    <div>
        <Router>
          <Routes>
            {
              routes.map((route) => {
                const Page = route.page
                const Layout = route.isShowHeader ? DefaultComponent : Fragment
                return (
                  <Route key={route.path} path={route.path} element={
                    <Layout>
                      <Page/>
                    </Layout>
                
                } />
                )
              })
            }
          </Routes>
        </Router>
    </div>
  )
}

export default App