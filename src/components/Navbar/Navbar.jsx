import React, { useEffect, useState } from 'react'
import'./navbar.scss'
// import { Link } from 'react-router-dom'
export default function Navbar() {
  const [active, setActive]=useState(false);
  const [open, setopen]=useState(false);
  const isActive=()=>{
    window.scrollY > 0 ? setActive(true): setActive(false);

  }
  useEffect(()=>{
    window.addEventListener('scroll', isActive);
    console.log('useeffect call')
    return ()=>{
      window.removeEventListener('scroll', isActive)
    }
  },[])
  const currentUser={
    id:1,
    username:"guest",
    isSeller:true
  }
  return (
    <div >
      <div className={active ? "navbar active":"navbar"}>

        <div className="container">
          <div className="logo">
            {/* <Link to="/"> */}
            <span className="text">PakFreelance</span>
            {/* </Link> */}
            <span className="dot">.</span>
            </div>
            <div className="links">
              <span>Business</span>
              <span>Explore</span>
              <span>English</span>
              <span>Sign in</span>
              {!currentUser?.isSeller &&<span>Become a Seller</span>}
              {!currentUser && <button>Join</button>}
              {
                currentUser && (
                  <div className="user d-flex align-items-center" onClick={()=>setopen(!open)}>
                    <img src="https://i.ibb.co/0s4Y4YX/Profile-Image-1.png" alt="Profile"/>
                    <span>{currentUser?.username}</span>
                   {open && <div className="options d-flex flex-column ">
                     { currentUser?.isSeller &&(
                      <>
                      <span>Gigs</span>
                      <span>Add New Gig</span>
                      </>
                     )}
                     <span>Orders</span>
                     <span>Messages</span>
                     <span>Logout</span>
                    </div>}
                  </div>
                )
              }
              </div>
        </div>
       {active && <> <hr />
        <div className="container">

        <div className="menu">
          <span>jfj</span>
          <span>fj</span>
        </div>
        </div></>}
      </div>
    </div>
  )
}
