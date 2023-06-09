import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <h1>Compumundo HiperMegaRed</h1>

        <nav>
            <ul>
                <li>Software</li>
                <li>Hardware</li>
                <li>Servicios</li>
            </ul>
        </nav>

        <CartWidget/>

    </header>
  )
}

export default NavBar