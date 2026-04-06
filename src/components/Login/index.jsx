import "./index.css"
import { useState, useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { useNavigate, Link } from "react-router-dom"

const Login = () => {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  const [form, setForm] = useState({ email: "", password: "" })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (form.email && form.password) {
      login(form)
      navigate("/dashboard")
    } else {
      alert("Fill all fields")
    }
  }

  return (
    <div className="login">
      <h1>Bid's</h1>
      <p>Log in</p>

      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email"
          onChange={(e)=>setForm({...form,email:e.target.value})} />

        <input type="password" placeholder="Password"
          onChange={(e)=>setForm({...form,password:e.target.value})} />

        <button>Let's Bid →</button>
      </form>

      <Link to="/signup">Create Account</Link>
    </div>
  )
}

export default Login