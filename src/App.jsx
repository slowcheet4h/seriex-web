import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Main from './pages/Main'
import Playerlist from './pages/Playerlist'

function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/playerlist" element={<Playerlist />} />
        <Route index element={<Main />} />
      </Routes>
    </>
  )
}

export default App
