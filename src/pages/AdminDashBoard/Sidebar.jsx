import {Link} from 'react-router-dom'
import { MdAddToPhotos } from "react-icons/md";
import { RiHome3Fill } from "react-icons/ri";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaSignOutAlt } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import { IoBagRemoveSharp } from "react-icons/io5";





function Sidebar({active}) {

    return (
      <div className="dashboardSidebar min-vh-100 d-none d-xl-block">
        <div className="p-4">
          <a href="buyer-dashboard.html">
            <img src="assets/img/dashboard/logo/logo-main.svg" alt="" />
          </a>
        </div>
        <ul className="sidebar-nav p-3 overflow-y-auto">
          <li className="sidebar-nav-item">
            <Link
              to="/admin"
              className={
                active === "dashboard"
                  ? "sidebarNavLink active"
                  : "sidebarNavLink"
              }
            >
              <RiHome3Fill style={{ width: "20px", height: "20px" }} />
              Dashboard
            </Link>
          </li>
          <li className="sidebar-nav-item">
            <Link
              to="/allCategory"
              className={
                active === "category"
                  ? "sidebarNavLink active"
                  : "sidebarNavLink"
              }
            >
              <BiSolidCategoryAlt style={{ width: "20px", height: "20px" }} />
              All Categories
            </Link>
          </li>
          <li className="sidebar-nav-item">
            <Link
              to="/postCategory"
              className={
                active === "addcategory"
                  ? "sidebarNavLink active"
                  : "sidebarNavLink"
              }
            >
              <MdAddToPhotos style={{ width: "20px", height: "20px" }} />
              Add Category
            </Link>
          </li>

          <li className="sidebar-nav-item">
            <Link
              to="/projects"
              className={
                active === "projects"
                  ? "sidebarNavLink active"
                  : "sidebarNavLink"
              }
            >
              <IoBagRemoveSharp style={{ width: "20px", height: "20px" }} />
              All Project
            </Link>
          </li>
          <li className="sidebar-nav-item">
            <Link
              to="/postSkill"
              className={
                active === "skill" ? "sidebarNavLink active" : "sidebarNavLink"
              }
            >
              <IoMdAddCircle style={{ width: "20px", height: "20px" }} />
              Add Skill
            </Link>
          </li>

          <li className="sidebar-nav-item">
            <button
              className="sidebarNavLink"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#logoutModal"
            >
              <FaSignOutAlt style={{ width: "20px", height: "20px" }} />
              Logout
            </button>
          </li>
        </ul>
      </div>
    );
}

export default Sidebar;
