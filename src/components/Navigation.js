import React from "react";

export default function Nav({ currentPage, handlePageChange }) {
  return (
    <header>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarExample01"
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#home"
                  //Ternary operator, check to see if current page is Home.

                  onClick={() => handlePageChange("Home")}
                  //if it is, set current page to 'nav-item-active', otherwise set it to 'nav-link'
                  className={
                    currentPage === "Home" ? "nav-item active" : "nav-link"
                  }
                >
                  About Me
                </a>
              </li>
              <li className="nav-item active">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#aboutme"
                  //Ternary operator, check to see if current page is About Me.

                  onClick={() => handlePageChange("AboutMe")}
                  //if it is, set current page to 'nav-item-active', otherwise set it to 'nav-link'
                  className={
                    currentPage === "AboutMe" ? "nav-item active" : "nav-link"
                  }
                >
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#portfolio"
                  //Ternary operator, check to see if current page is portfolio.

                  onClick={() => handlePageChange("Portfolio")}
                  //if it is, set current page to 'nav-item-active', otherwise set it to 'nav-link'
                  className={
                    currentPage === "Portfolio" ? "nav-item active" : "nav-link"
                  }
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#contact"
                  //Ternary operator, check to see if current page is contact.

                  onClick={() => handlePageChange("Contact")}
                  //if it is, set current page to 'nav-item-active', otherwise set it to 'nav-link'
                  className={
                    currentPage === "Contact" ? "nav-item active" : "nav-link"
                  }
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#resume"
                  //Ternary operator, check to see if current page is resume.

                  onClick={() => handlePageChange("Resume")}
                  //if it is, set current page to 'nav-item-active', otherwise set it to 'nav-link'
                  className={
                    currentPage === "Resume" ? "nav-item active" : "nav-link"
                  }
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

// export default function Nav() {
//   return (
//     <header>
//       {/* <!-- Navbar --> */}
//       <nav className="navbar navbar-expand-lg navbar-light bg-white">
//         <div className="container-fluid">
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-mdb-toggle="collapse"
//             data-mdb-target="#navbarExample01"
//             aria-controls="navbarExample01"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <i className="fas fa-bars"></i>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarExample01">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item active">
//                 <a className="nav-link" aria-current="page" href="#">
//                   About Me
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   Portfolio
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   Contact
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">
//                   Resume
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }
