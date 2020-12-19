import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
} from "@fortawesome/free-solid-svg-icons";


class Header extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      mobileMenu: false
    }
  }

  showMobileMenu(){
    const {mobileMenu} = this.state
    if(mobileMenu){
      document.getElementsByTagName("body")[0].style.marginLeft = "0px"
      document.getElementsByTagName("body")[0].style.display = "block"
      document.getElementById("root").style.pointerEvents = "all"
      document.getElementsByClassName("header-nav")[0].style.display = "none"
    }else{
      document.getElementsByTagName("body")[0].style.marginLeft = "256px"
      document.getElementsByTagName("body")[0].style.display = "flex"
      document.getElementById("root").style.pointerEvents = "none"
      document.getElementsByClassName("header")[0].style.pointerEvents = "all "
      document.getElementsByClassName("header-nav")[0].style.display = "block"
    }
    this.setState({mobileMenu: !mobileMenu})
  }

  render() {
    return (
      <div className="header">
        <div className="header-mobile-menu-wrapper">
          <span onClick={() => this.showMobileMenu()} className="header-mobile-span">
            <div className="header-mobile-menu-icon"></div>
          </span>
          <h1 className="header-mobile-heading">NAME OF THE PROJECT</h1>
        </div>


        <div className="header-nav">
          <Link onClick={() => this.showMobileMenu()} className="header-menu-element" to="/">
            <div className="header-menu-icon">
              <FontAwesomeIcon icon={faHome} />
            </div>
            Home
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;