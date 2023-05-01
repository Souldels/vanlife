import { Link } from "react-router-dom"

function Home() {

	return (
		<div className="home-container">
			<h1>У Вас есть план путешествия, у нас есть туристические фургоны.</h1>
			<p>Добавьте приключений в свою жизнь, присоединившись к движению #vanlife. Возьмите напрокат идеальный фургон, чтобы совершить идеальное путешествие.</p>
			<Link to="vans">Найдите свой фургон</Link>
		</div>
	)
}

export default Home