import LogoVector from "../assets/f1-vector.png";
import "./Header.css";
import "../App";
import "../pages/Home";
import "../pages/About";
import "../pages/Blog";

function Header() {
  return (
    <header className="navBar">
      <a href='/'>
        <img
          className="reactLogo"
          src={LogoVector}
          alt="Logo"
          width="40"
          height="34"
        /></a>
      <div className="navLinks">
      <a href='/'>Home</a>
      <a href='/about'>About</a>
      <a href='/blog'>Blog</a>
      </div>
    </header>
  );
}

export default Header;
