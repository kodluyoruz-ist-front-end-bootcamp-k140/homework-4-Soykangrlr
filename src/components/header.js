
import {  Link,  Routes, Route  } from "react-router-dom";

import About from "./about";
import Ads from "./ads";
import Error from "./error";
import Homepage from "./homepage";
function Header() {
  return (
    <>
    
    <nav className="navbar bg-light navbar-expand-md   fixed-top">
		<div className="container">
			<a  className="navbar-brand " id="logo">
	  		 <img src="img/catı1.png" alt=""/><span >Proje Teams</span> 
	      	</a>

			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div id="navbarCollapse" className="collapse navbar-collapse">
				<ul className="navbar-nav ml-auto">
                    <li className="nav-item">
						<Link to="/" className="nav-link  ">
                            Hayelinizdeki Ev <i id="pad" className="fas fa-search-location"></i>
	      			</Link>
					</li>
                    <li id="cizgi" className="nav-item">
						<Link to="/ads" className="nav-link  ">
	      				İlanlar
	      			</Link>
					</li>
					<li id="cizgi"  className="nav-item">
						<Link to="/about" className="nav-link  ">
	      				Hakkımızda
	      			</Link>
					</li>
				</ul>
			</div>

		</div>
    </nav>
    <Routes  >
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/ads" element={<Ads />} />
        <Route path="*" element={<Error />} />
      </Routes>
   
    </>
  )
}
export default Header