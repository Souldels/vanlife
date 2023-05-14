import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function HostVans() {

	const [vans, setVans] = useState([]);

	useEffect(() => {
		fetch('/api/host/vans')
			.then(resp => resp.json())
			.then(data => setVans(data.vans))
	}, []);

	const hostVansEl = vans.map(van => (
		<Link
			to={`/host/vans/${van.id}`}
			key={van.id}
			className="host-van-link-wrapper"
		>
			<div className="host-van-single" key={van.id}>
				<img src={van.imageUrl} alt={`Photo of ${van.name}`} />
				<div className="host-van-info">
					<h3>{van.name}</h3>
					<p>{van.price} ₽/день</p>
				</div>
			</div>
		</Link>
	))

	return (
		<section>
			<h1 className="host-vans-title">Ваш список фургонов</h1>
			<div className="host-vans-list">
				{
					vans.length > 0 ? (
						<section>
							{hostVansEl}
						</section>

					) : (
						<h2>Загрузка...</h2>
					)
				}
			</div>
		</section>
	)
}

export default HostVans;