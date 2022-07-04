import { Link } from "react-router-dom"
import { Allroutes } from "./pages/routes"

function App() {
 

  return (
    <div >
      <div style={{ margin:'auto' , width:"40%" , display : "flex" , justifyContent : 'space-around' , marginTop : '70px'}}>
        <Link to={'/'}>Home</Link>
        <Link to={'/country'}>Add Country</Link>
        <Link to={'/city'}>Add City</Link>
      </div>
      <Allroutes></Allroutes>
    </div>
  )
}

export default App
