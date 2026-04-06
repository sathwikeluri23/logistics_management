import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Dashboard from "./components/Dashboard"
import ResponseForm from "./components/ResponseForm"
import BidDetails from "./components/BidDetails"
import AuthProvider, { AuthContext } from "./context/AuthContext"
import { useContext } from "react"

const Protected = ({children})=>{
  const {user} = useContext(AuthContext)
  return user ? children : <Navigate to="/" />
}

const App = ()=>{
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/dashboard" element={<Protected><Dashboard/></Protected>}/>
          <Route path="/create" element={<Protected><ResponseForm/></Protected>}/>
          <Route path="/bid/:id" element={<Protected><BidDetails/></Protected>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App