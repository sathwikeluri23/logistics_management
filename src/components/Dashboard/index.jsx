import "./index.css"
import Sidebar from "../Sidebar"
import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"

const Dashboard = ()=>{
  const {bids} = useContext(AuthContext)
  const [search,setSearch] = useState("")
  const navigate = useNavigate()

  const filtered = bids.filter(b =>
    b.from.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="dash">
      <Sidebar/>

      <div className="main">

        <div className="top">
          <input placeholder="Search city..." onChange={(e)=>setSearch(e.target.value)}/>
          <button className="create" onClick={()=>navigate("/create")}>+ Create Bid</button>
        </div>

        <div className="badges">
          <span className="live">Live ({bids.length})</span>
          <span className="green">Responded (12)</span>
          <span className="red">Unresponded (8)</span>
        </div>

        <div className="table">

          <div className="thead">
            <p>S No</p>
            <p>Bid No</p>
            <p>Start</p>
            <p>Time</p>
            <p>Route</p>
            <p>Vehicle</p>
            <p>Weight</p>
            <p>Response</p>
            <p>Staff</p>
          </div>

          {filtered.map((b,i)=>(
            <div key={b.id} className="row" onClick={()=>navigate(`/bid/${b.id}`)}>
              <p>{i+1}</p>
              <p>{b.bidNo}</p>
              <p>{b.start}</p>
              <p>{b.time}</p>
              <p>{b.from} → {b.to}</p>
              <p>{b.vehicle}</p>
              <p>{b.weight}</p>
              <p>{b.response}</p>
              <p>{b.staff}</p>
            </div>
          ))}

        </div>

      </div>
    </div>
  )
}

export default Dashboard