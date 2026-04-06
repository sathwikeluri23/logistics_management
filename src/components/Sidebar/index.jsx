import "./index.css"
import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

const Sidebar = ()=>{
  const {logout} = useContext(AuthContext)
  const navigate = useNavigate()

  return (
    <div className="sidebar">

      <h1 className="logo">BID'S</h1>

      <div className="menu">
        <Link to="/dashboard">Bid</Link>
        <Link to="/create">Create Bid</Link>
        <Link to="#">POD</Link>
        <Link to="#">Vendor</Link>
      </div>

      <div className="bottom">
        <button>Settings</button>
        <button>Profile</button>
        <button onClick={()=>{logout();navigate("/")}}>Logout</button>
      </div>

    </div>
  )
}

export default Sidebar