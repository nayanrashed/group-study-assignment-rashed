import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import avatar from "../../assets/avatar.jpg";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut().then().catch();
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/createAssignment">Create Assignment</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/allAssignments">All Assignments</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/submittedAssignments">Submitted Assignments</NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink to="/myAssignments">My Assignments</NavLink>
        </li>
      )}
      {!user && (
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user?.photoURL ? (
          <div className="tooltip tooltip-bottom" data-tip="hello">
            <img
              className="rounded-full w-6 md:w-8 "
              src={user?.photoURL}
              alt="Profile Pic"
            ></img>
          </div>
        ) : (
          user && (
            <div className="tooltip tooltip-bottom" data-tip={user.email}>
              <img
                className="rounded-full w-6 md:w-8 "
                src={avatar}
                alt="Profile Pic"
              ></img>
            </div>
          )
        )}
        {/* {user && (
          <p className="hidden md:inline md:text-lg px-1"> {user?.email}</p>
        )} */}
        {user ? (
          <button className="btn btn-sm" onClick={handleSignOut}>
            Sign Out
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
