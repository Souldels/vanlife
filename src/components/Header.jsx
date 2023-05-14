import { Link, NavLink } from "react-router-dom"


function Header() {

	return (
		<header>
			<Link to='/' className="site-logo">#VANLIFE</Link>
			<nav>
				<NavLink
					to='/host'
					className={({ isActive }) => isActive ? "active-link" : null}
				>
					Владельцу
				</NavLink>
				<NavLink
					to='/about'
					className={({ isActive }) => isActive ? "active-link" : null}
				>
					О нас
				</NavLink>
				<NavLink
					to='/vans'
					className={({ isActive }) => isActive ? "active-link" : null}
				>
					Фургоны
				</NavLink>
			</nav>
		</header>
	)
}


export default Header;