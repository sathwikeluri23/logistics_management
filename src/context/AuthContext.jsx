import { createContext, useState, useEffect } from "react"

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  const defaultBids = [
    {
      id:1,
      bidNo:"BID123",
      createdBy:"Sunder Yadav",
      start:"14 Feb 05:40 PM",
      time:"7h",
      from:"Chennai",
      to:"Bangalore",
      vehicle:"Truck 20ft",
      weight:"4000",
      response:"4",
      staff:"Rahul Pandey"
    },
    {
      id:2,
      bidNo:"BID124",
      createdBy:"Arun Kumar",
      start:"15 Feb 10:30 AM",
      time:"5h",
      from:"Hyderabad",
      to:"Coimbatore",
      vehicle:"Mini Truck",
      weight:"2000",
      response:"2",
      staff:"Ravi Teja"
    },
    {
      id:3,
      bidNo:"BID125",
      createdBy:"Manoj Reddy",
      start:"16 Feb 01:15 PM",
      time:"3h",
      from:"Madurai",
      to:"Trichy",
      vehicle:"Pickup",
      weight:"1000",
      response:"1",
      staff:"Karthik"
    },
    {
      id:4,
      bidNo:"BID126",
      createdBy:"Vignesh",
      start:"17 Feb 08:00 AM",
      time:"8h",
      from:"Mysore",
      to:"Chennai",
      vehicle:"Truck 32ft",
      weight:"3000",
      response:"3",
      staff:"Sathish"
    },
    {
      id:5,
      bidNo:"BID127",
      createdBy:"Praveen",
      start:"18 Feb 06:45 PM",
      time:"10h",
      from:"Salem",
      to:"Hyderabad",
      vehicle:"Container",
      weight:"5000",
      response:"5",
      staff:"Naveen"
    },
    {
      id:6,
      bidNo:"BID128",
      createdBy:"Ajay",
      start:"19 Feb 11:20 AM",
      time:"6h",
      from:"Vizag",
      to:"Bangalore",
      vehicle:"Truck 20ft",
      weight:"3500",
      response:"2",
      staff:"Deepak"
    },
    {
      id:7,
      bidNo:"BID129",
      createdBy:"Kiran",
      start:"20 Feb 09:00 AM",
      time:"4h",
      from:"Tirupati",
      to:"Chennai",
      vehicle:"Mini Truck",
      weight:"1500",
      response:"1",
      staff:"Harish"
    }
  ]

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")))

  const [bids, setBids] = useState(() => {
    const saved = localStorage.getItem("bids")
    return saved ? JSON.parse(saved) : defaultBids
  })

  useEffect(() => {
    localStorage.setItem("bids", JSON.stringify(bids))
  }, [bids])

  const login = (data) => {
    localStorage.setItem("user", JSON.stringify(data))
    setUser(data)
  }

  const logout = () => {
    localStorage.removeItem("user")
    setUser(null)
  }

  const generateBidNo = () => {
    const now = new Date()
    return "BID" + now.getTime().toString().slice(-6)
  }

  const addBid = (bid) => {
    const newBid = {
      ...bid,
      id: Date.now(),
      bidNo: generateBidNo()
    }

    setBids(prev => [...prev, newBid])
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, bids, addBid }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider