import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

function Vans() {
	const [vans, setVans] = useState([]);

	useEffect(() => {
		fetch('/api/vans')
			.then(resp => resp.json())
			.then(data => setVans(data.vans))
	}, [])


	const vanElements = vans.map(van => (
		<div key={van.id} className="van-title">
			<Link to={`/vans/${van.id}`}>
				<img src={van.imageUrl} />
				<div className="van-info">
					<h3>{van.name}</h3>
					<p>{van.price} ₽<span>/день</span></p>
				</div>
				{/* <i className={`van-type ${van.type} selected`}>{van.type}</i> */}

				<i className={`van-type ${van.type === 'простой' ? 'simple' : van.type === 'строгий' ? 'rugged' : van.type === 'люкс' ? 'luxury' : ''} selected`}>
					{van.type}
				</i>
			</Link>
		</div>
	))

	return (
		<div className="van-list-container">
			<h1>Изучите наши фургоны</h1>
			<div className="van-list">
				{vanElements}
			</div>
		</div>
	)
}

export default Vans