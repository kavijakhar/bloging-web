import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/About'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'
import Contact from './components/Contact'
import Blog from './components/Blog'
import Blogpage from './components/Blogpage'



const App = () => {


  // const data = useContext(NoteState);
  // const { Getoneblog } = data
  // console.log(Getoneblog)
// 
  // useEffect(()=>{
    // Getoneblog()
    // eslint-disable-next-line
  // },[])
// 

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/blogpage"  element={<Blogpage />} />

      </Routes>

    </Router>

  )
}

export default App
