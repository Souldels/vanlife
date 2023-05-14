import { useOutletContext } from "react-router-dom";

function HostVanInfo() {
	const { currentVan } = useOutletContext()

	return (
		<section className="host-van-detail-info">
			<h4>Название: <span>{currentVan.name}</span></h4>
			<h4>Категория: <span>{currentVan.type}</span></h4>
			<h4>Описание: <span>{currentVan.description}</span></h4>
			<h4>Вилимость: <span>всем</span></h4>
		</section>
	)
}
export default HostVanInfo;