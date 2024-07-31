import './App.css'
import Navbar from './components/navbar/navbar'
import { Routes, Route } from 'react-router-dom'
import Profile from './components/profile/profile'
import Subscribes from './components/subscribes/subscribes'
import Subscriptions from './components/subscriptions/subscriptions'

function App() {
  return (
    <div className='app-wrapper'>
      <div className='app-header'> Header </div>
      <Navbar />
      <div className='app-content'>
        <Routes>
          <Route path='/profile' element={<Profile />}> </Route>
          <Route path='/posts' element={<Profile />}> </Route>
          <Route path='/subscriptions' element={<Subscriptions />}> </Route>
          <Route path='/Subscribes' element={<Subscribes />}> </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
