import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom"


function HostVansDetail() {
	const { id } = useParams()
	const [currentVan, setCurrentVan] = useState(null)

	useEffect(() => {
		fetch(`/api/host/vans/${id}`)
			.then(res => res.json())
			.then(data => setCurrentVan(data.vans[0]))
	}, [])

	if (!currentVan) {
		return <h1>Загрузка...</h1>
	}

	return (
		<section>
			<Link
				to="/host/vans"
				relative="path"
				className="back-button"
			>&larr; <span>Вернуться ко всем</span></Link>
			<div className="host-van-detail-layout-container">
				<div className="host-van-detail">
					<img src={currentVan.imageUrl} />
					<div className="host-van-detail-info-text">
						<i className={`van-type ${currentVan.type === 'простой' ? 'simple' : currentVan.type === 'строгий' ? 'rugged' : currentVan.type === 'люкс' ? 'luxury' : ''} selected`}>
							{currentVan.type}
						</i>
						<h3>{currentVan.name}</h3>
						<h4>{currentVan.price} ₽/день</h4>
					</div>
				</div>

				<nav className="host-van-detail-nav">
					<NavLink
						className={({ isActive }) => isActive ? "is-active" : null}
						to='.'
						end>
						Детали
					</NavLink>
					<NavLink
						className={({ isActive }) => isActive ? "is-active" : null}
						to='pricing'>
						Стоимость
					</NavLink>
					<NavLink
						className={({ isActive }) => isActive ? "is-active" : null}
						to='photo'>
						Фотографии
					</NavLink>
				</nav>

				<Outlet context={{ currentVan }} />
			</div>
		</section>
	)

}

export default HostVansDetail;