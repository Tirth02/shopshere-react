import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar/>
      {/* Header will go here */}
      <main className="flex-1">
        <Outlet/>
      </main>
      {/* Footer will go here */}
      <Footer/>
    </div>
  )
}

export default MainLayout
