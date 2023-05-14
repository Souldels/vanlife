import { Outlet, NavLink } from "react-router-dom"

export default function HostLayout() {
	return (
		<>
			<nav className="host-nav">
				<NavLink
					className={({ isActive }) => isActive ? "is-active" : null}
					to='/host'
					end>
					Панель управления
				</NavLink>
				<NavLink
					className={({ isActive }) => isActive ? "is-active" : null}
					to='income'>
					Доход
				</NavLink>
				<NavLink
					className={({ isActive }) => isActive ? "is-active" : null}
					to='vans'>
					Фургоны
				</NavLink>
				<NavLink
					className={({ isActive }) => isActive ? "is-active" : null}
					to='reviews'>
					Отзывы
				</NavLink>
			</nav>
			<Outlet />
		</>
	)
}