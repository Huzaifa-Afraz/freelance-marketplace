import Navbar from "./components/Navbar/Navbar";
import {createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
import Home from './pages/home/Home.jsx'
import Gigs from './pages/gigs/Gigs.jsx'
import Gig from './pages/gig/Gig.jsx'
// import Login from './pages/Login/Login.jsx'
import MyGigs from './pages/myGigs/Mygigs.jsx'
import Add from './pages/add/Add.jsx'
import Messages from './pages/messages/Messages.jsx'
import Message from "./pages/message/Message.jsx";
import './app.scss'
import Footer from "./components/footer/Footer";
function App() {
  const Layout=()=>{
    return (
      <div className="App">
        <Navbar />
        <Outlet />
        <Footer/>
      </div>
    )
  }
  const router =createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/gigs",
          element:<Gigs />
        },
        {
          path:"/gig/:id",
          element:<Gig />
        },
        {
          path:"/mygigs",
          element:<MyGigs />
        },
        {
          path:"/add",
          element:<Add />
        },
        {
          path:"/messages",
          element:<Messages />
        },
        {
          path:"/message/:id",
          element:<Message />
        },
        // {
        //   path:"/",
        //   element:<Home />
        // },
        // {
        //   path:"/",
        //   element:<Home />
        // },
        // {
        //   path:"/",
        //   element:<Home />
        // },
      ]
    }
  ])
  return (
    <div>
   <RouterProvider router={router}/>
  
    </div>
  );
}

export default App;
