import { ArrowBigRightDashIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import "./css_files/Navbar.css";

const Navbar = () => {

  return (
    <div id="ey-navbar-container">
      
      <div id="ey-navbar-title">

        <span style={{color : "red"}}>FIN</span>BABA 
      </div>

      <div id="ey-navbar-links-box">

          <div className="ey-navbar-links">HOW IT WORKS</div>
          <div className="ey-navbar-links">PRICING</div>
          <div className="ey-navbar-links">FAQS</div>
          <div className="ey-navbar-links">BLOG</div>

      </div>

      <div id="ey-navbar-buttons-box">

        <div className="ey-navbar-button">
          <Button >LOG IN</Button>
        </div>

        <div className="ey-navbar-button">
          <Button variant="diffBg"> TRY NOW <ArrowBigRightDashIcon /> </Button>
        </div>

      </div>

    </div>
  )
}

export default Navbar
