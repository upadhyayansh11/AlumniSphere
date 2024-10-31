// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav
//       class="navbar navbar-expand-lg border-bottom fixed-top"
//       style={{ backgroundColor: "#FFF" }}
//     >
//       <div class="container p-2">
//         <Link class="navbar-brand" to="/">
//           <img
//             src="media/images/unilogo1.svg"
//             alt="logo"
//             style={{ width: "30%" }}
//           />
//         </Link>
//         <button
//           class="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div
//           class="collapse navbar-collapse"
//           style={{ width: "80%" }}
//           id="navbarSupportedContent"
//         >
//           <form class="d-flex" role="search">
//             <ul class="navbar-nav mb-lg-0" style={{ marginLeft: "200x" }}>
//               <li class="nav-item">
//                 <Link class="nav-link active" aria-current="page" to="/">
//                   Home
//                 </Link>
//               </li>
//               <li class="nav-item">
//                 <Link class="nav-link active" to="/about">
//                   About
//                 </Link>
//               </li>
//               <li class="nav-item">
//                 <Link class="nav-link active" to="/events">
//                   Events
//                 </Link>
//               </li>
//               <li class="nav-item">
//                 <Link class="nav-link active" to="/aluminidirect">
//                   Alumni Directory
//                 </Link>
//               </li>
//               <li class="nav-item">
//                 <Link class="nav-link active" to="/blog">
//                   Create Blog
//                 </Link>
//               </li>

//               <li class="nav-item">
//                 <Link class="nav-link active" to="/contactus">
//                   Contact Us
//                 </Link>
//               </li>
//               <li class="nav-item">
//                 <Link class="nav-link active" to="/signup">
//                   Signup
//                 </Link>
//               </li>
//               <li class="nav-item">
//                 <Link class="nav-link active" to="/login">
//                   Login
//                 </Link>
//               </li>
//             </ul>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const closeNavbar = () => {
    setIsCollapsed(true);
  };

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom fixed-top"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        <Link className="navbar-brand" to="/" onClick={closeNavbar}>
          <img
            src="media/images/unilogo1.svg"
            alt="logo"
            style={{ width: "30%" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
          aria-controls="navbarSupportedContent"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
          id="navbarSupportedContent"
          style={{ width: "80%" }}
        >
          <ul className="navbar-nav ms-auto mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/" onClick={closeNavbar}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/about"
                onClick={closeNavbar}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/events"
                onClick={closeNavbar}
              >
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/aluminidirect"
                onClick={closeNavbar}
              >
                Alumni Directory
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/blog"
                onClick={closeNavbar}
              >
                Create Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/contactus"
                onClick={closeNavbar}
              >
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/signup"
                onClick={closeNavbar}
              >
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/login"
                onClick={closeNavbar}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
