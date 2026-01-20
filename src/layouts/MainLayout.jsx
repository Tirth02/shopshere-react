import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      {/* Header will go here */}
      <Outlet />
      {/* Footer will go here */}
    </div>
  )
}

export default MainLayout
