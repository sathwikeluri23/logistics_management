import "./index.css"
import Sidebar from "../Sidebar"
import { useParams } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

const BidDetails = ()=>{
  const {id} = useParams()
  const {bids} = useContext(AuthContext)

  const bid = bids.find(b=>b.id === Number(id))

  if(!bid) return <p>No Data</p>

  return (
    <div className="dash">
      <Sidebar/>

      <div className="main">

        <div className="card">

          <div className="topRow">
            <p><b>Bid No:</b> {bid.bidNo}</p>
            <p>Vehicle loading date: {bid.start}</p>
            <p>Assigned Staff: {bid.staff}</p>
          </div>

          <div className="middle">

            <div className="left">

              <div className="point">
                <span className="dotgreen"></span>
                <div>
                  <p className="city">{bid.from}</p>
                  <p className="label">Loading Point</p>
                </div>
              </div>

              <div className="point">
                <span className="dotred"></span>
                <div>
                  <p className="city">{bid.to}</p>
                  <p className="label">Unloading Point</p>
                </div>
              </div>

            </div>

            <div className="right">

              <p><b>Vehicle:</b> {bid.vehicle}</p>
              <p><b>Material:</b> General Goods</p>
              <p><b>Weight:</b> {bid.weight} kg</p>
              <p><b>Response:</b> {bid.response}</p>
              <p><b>Time Remaining:</b> {bid.time}</p>

            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default BidDetails