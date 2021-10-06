import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { About, CFT, NavBar, PFT } from "./components";
import Home from "./components/home/Home"
import styles from "./App.Module.scss";
import Login from "./components/users/Login";
import Register from "./components/users/Register";
import Graph from "./components/chart/Graph";
import StopWatch from "./components/stopwatch/StopWatch";
import SearchPage from "./components/SearchPage";
import BMI from "./components/bmi/Bmi";

class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <div className={styles.container}>
          <SearchPage />
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/pft" component={PFT} />
          <Route path="/cft" component={CFT} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/Graph" component={Graph} />
          <Route path="/StopWatch" component={StopWatch} />
          <Route path="/Bmi" component={BMI} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

//   return (
//     <div>
//       <nav className="navbar navbar-expand navbar-dark bg-dark">
//         <Link to={"/"} className="navbar-brand">
//           USMC
//         </Link>
//         <div className="navbar-nav mr-auto">
          // <li className="nav-item">
          //   <Link to={"/home"} className="nav-link">
          //     Home
          //   </Link>
          // </li>

//           {showModeratorBoard && (
//             <li className="nav-item">
//               <Link to={"/mod"} className="nav-link">
//                 Moderator Board
//               </Link>
//             </li>
//           )}

//           {showAdminBoard && (
//             <li className="nav-item">
//               <Link to={"/admin"} className="nav-link">
//                 Admin Board
//               </Link>
//             </li>
//           )}

//           {currentUser && (
//             <li className="nav-item">
//               <Link to={"/user"} className="nav-link">
//                 User
//               </Link>
//             </li>
//           )}
//         </div>

//         {currentUser ? (
//           <div className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <Link to={"/profile"} className="nav-link">
//                 {currentUser.username}
//               </Link>
//             </li>
//             <li className="nav-item">
//               <a href="/login" className="nav-link" onClick={logOut}>
//                 LogOut
//               </a>
//             </li>
//           </div>
//         ) : (
//           <div className="navbar-nav ml-auto">
            // <li className="nav-item">
            //   <Link to={"/login"} className="nav-link">
            //     Login
            //   </Link>
            // </li>

            // <li className="nav-item">
            //   <Link to={"/register"} className="nav-link">
            //     Sign Up
            //   </Link>
            // </li>

//             <li className="nav-item">
//               <Link to={"/about"} className="nav-link">
//                 About
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link to={"/graph"} className="nav-link">
//                 Graph
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link to={"/stopwatch"} className="nav-link">
//                 StopWatch
//               </Link>
//             </li>

//             <li className="nav-item">
//               <Link to={"/bmi"} className="nav-link">
//                 BmiCalc
//               </Link>
//             </li>


//           </div>
//         )}
//       </nav>

//       <div className="container mt-3">
//         <Switch>
//           <Route exact path={["/", "/home"]} component={Home} />
//           <Route exact path="/login" component={Login} />
//           <Route exact path="/register" component={Register} />
//           <Route exact path="/profile" component={Profile} />
//           <Route path="/user" component={BoardUser} />
//           <Route path="/mod" component={BoardModerator} />
//           <Route path="/admin" component={BoardAdmin} />
//           <Route path="/about" component={About} />
//           <Route path="/cft" component={CFT} />
//           <Route path="/pft" component={PFT} />
//           <Route path="/graph" component={Graph} />
//           <Route path="/stopwatch" component={StopWatch} />
//           <Route path="/bmi" component={BmiCalc} />

//         </Switch>
//       </div>

//       {/* <AuthVerify logOut={logOut}/> */}
//     </div>
//   );
// };

// export default App;