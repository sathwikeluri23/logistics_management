import "./index.css"
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

const Signup = () => {
  const navigate = useNavigate()
  const { login } = useContext(AuthContext)
  const [form, setForm] = useState({ username:"", email:"", password:"" })

  const handleSubmit = (e) => {
    e.preventDefault()

    if(form.username && form.email && form.password){
      login(form)
      navigate("/dashboard")
    } else {
      alert("Fill all fields")
    }
  }

  return (
    <div className="login">
      <h2>Signup</h2>

      <form onSubmit={handleSubmit}>
        <input placeholder="Username" onChange={(e)=>setForm({...form,username:e.target.value})}/>
        <input placeholder="Email" onChange={(e)=>setForm({...form,email:e.target.value})}/>
        <input type="password" placeholder="Password" onChange={(e)=>setForm({...form,password:e.target.value})}/>
        <button>Create</button>
      </form>
    </div>
  )
}

export default Signup
