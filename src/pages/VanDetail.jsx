import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

export default function VanDetail() {
	const params = useParams();
	const [van, setVan] = useState(null)

	useEffect(() => {
		fetch(`/api/vans/${params.id}`)
			.then(resp => resp.json())
			.then(data => setVan(data.vans))
	}, [params.id])

	return (
		<div className="van-detail-container">
			{van ? (
				<div className="van-detail">
					<img src={van.imageUrl} />
					<i className={`van-type ${van.type === 'простой' ? 'simple' : van.type === 'строгий' ? 'rugged' : van.type === 'люкс' ? 'luxury' : ''} selected`}>
						{van.type}
					</i>
					<h2>{van.name}</h2>
					<p className="van-price"><span>{van.price}₽</span> /день</p>
					<p>{van.description}</p>
					<button className="link-button">Взять в аренду</button>
				</div>
			) : <h2>Загрузка...</h2>}
		</div>
	)
}