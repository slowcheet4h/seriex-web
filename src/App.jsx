import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Main from './pages/Main'
import Playerlist from './pages/Playerlist'
import Maintenance from './pages/Maintenance';

function App() {
  /* change if server is in maintenance */
  let maintenance = false;

  return (
    maintenance ? (<Maintenance></Maintenance>) : (<>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/playerlist" element={<Playerlist />} />
        <Route index element={<Main />} />
      </Routes>
    </>)
  )
}

export default App
