import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './component/shared/Footer/Footer'
import Navber from './component/shared/Navber/Navber'

function App() {
  

  return (
    <div >

      <Navber></Navber>
         
      <Outlet></Outlet>

      <Footer></Footer>


    </div>
  )
}

export default App
