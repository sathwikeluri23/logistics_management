import "./index.css"
import Sidebar from "../Sidebar"
import { useState, useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"

const ResponseForm = ()=>{
  const {addBid} = useContext(AuthContext)
  const navigate = useNavigate()

  const [form,setForm] = useState({
    createdBy:"",
    start:"",
    time:"",
    from:"",
    to:"",
    vehicle:"",
    weight:"",
    response:"",
    staff:""
  })

  const handleSubmit = (e)=>{
    e.preventDefault()


    addBid(form)

    navigate("/dashboard")
  }

  return (
    <div className="dash">
      <Sidebar/>

      <div className="main">
        <h2>Create Bid</h2>

        <form className="form" onSubmit={handleSubmit}>
          <input placeholder="Created By" onChange={(e)=>setForm({...form,createdBy:e.target.value})}/>
          <input type="datetime-local" onChange={(e)=>setForm({...form,start:e.target.value})}/>
          <input placeholder="Time Remaining" onChange={(e)=>setForm({...form,time:e.target.value})}/>
          <input placeholder="From" onChange={(e)=>setForm({...form,from:e.target.value})}/>
          <input placeholder="To" onChange={(e)=>setForm({...form,to:e.target.value})}/>
          <input placeholder="Vehicle" onChange={(e)=>setForm({...form,vehicle:e.target.value})}/>
          <input placeholder="Weight" onChange={(e)=>setForm({...form,weight:e.target.value})}/>
          <input placeholder="Response" onChange={(e)=>setForm({...form,response:e.target.value})}/>
          <input placeholder="Staff" onChange={(e)=>setForm({...form,staff:e.target.value})}/>
          <button>Create</button>
        </form>
      </div>
    </div>
  )
}

export default ResponseForm