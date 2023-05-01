import { Link } from "react-router-dom"
import bgImg from '../assets/img/about-hero.jpg'


function About() {

	return (
		<div className="about-page-container">
			<img src={bgImg} className="about-hero-image" />
			<div className="about-page-content">
				<h1>Не втискивайтесь в седан, когда можно расслабиться в фургоне.</h1>
				<p>Наша миссия состоит в том, чтобы оживить Ваше путешествие с помощью идеального фургона напрокат. Наши фургоны проходят повторную сертификацию перед каждой поездкой, чтобы гарантировать, что Ваши планы поездок будут выполнены без сучка и задоринки. (Сцепка оплачивается дополнительно 😉)</p>
				<p>В нашей команде полно энтузиастов vanlife, которые не понаслышке знают о волшебстве путешествия по миру на 4 колесах.</p>
			</div>
			<div className="about-page-cta">
				<h2>Ваш пункт назначения ждет.
					Ваш фургон готов.</h2>
				<Link className="link-button" to="/vans">Изучите наши фургоны</Link>
			</div>
		</div>
	)
}

export default About
