import { Link } from "react-router-dom"
import "./navbar.css"
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md"

const Navbar = ({ setDarkMode, darkMode }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="right">
          <img className="logo" src="./public/logo.png" alt="" />
        </div>
        <div className="left">
          <ul className="ul-nav-right">
            <li className="ul-nav-right-li">
              <Link className="Link" to="AddSpecialTable">
                Crear Mesa Especial
              </Link>
            </li>
            <li className="ul-nav-right-li">
              <Link className="Link" to="/">
                Home
              </Link>{" "}
            </li>
            <li className="ul-nav-right-li">
              <Link className="Link" to="AddProducts">
                Add Products
              </Link>
            </li>
            <li className="ul-nav-right-li">Mozos</li>
            <li className="ul-nav-right-li">A/C Caja</li>
            <li className="ul-nav-right-li">
              <button className="ingresar">Edicion masiva</button>
            </li>
            <li>
              <button
                className="btn-darkmode"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? (
                  <MdDarkMode color="var(--dark-color)" size={25} />
                ) : (
                  <MdOutlineDarkMode color="var(--dark-color)" size={25} />
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
