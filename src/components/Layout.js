import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <NavBar />
      <SideBar />

      <div className="outlet container">
        <Outlet />
      </div>
    </div>
  );
}
