import { useEffect, useState } from "react"

function Vans() {
	const [vans, setVans] = useState([]);

	useEffect(() => {
		fetch('/api/vans')
			.then(resp => resp.json())
			.then(data => setVans(data.vans))
	}, [])


	const vanElements = vans.map(van => (
		<div key={van.id} className="van-tile">
			<img src={van.imageUrl} />
			<div className="van-info">
				<h3>{van.name}</h3>
				<p>{van.price}₽<span> /день</span></p>
			</div>
			{/* <i className={`van-type ${van.type} selected`}>{van.type}</i> */}

			<i className={`van-type ${van.type === 'простой' ? 'simple' : van.type === 'строгий' ? 'rugged' : van.type === 'люкс' ? 'luxury' : ''} selected`}>
				{van.type}
			</i>

		</div>
	))

	return (
		<div className="van-list-container">
			<div className="van-list">
				{vanElements}
			</div>
		</div>
	)
}

export default Vans