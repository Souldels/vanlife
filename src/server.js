import { createServer, Model } from "miragejs";

createServer({
	models: {
		vans: Model,
	},

	seeds(server) {
		server.create("van", { id: "1", name: "Modest Explorer", price: 4800, description: "Этот фургон предназначен для выезда из дома на природу. Фургон оснащен солнечными батареями, биотуалетом, баком для воды и мини-кухней. Идея состоит в том, что Вы можете упаковать свой дом и уехать на выходные или даже дольше!", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png", type: "простой", hostId: "123" })
		server.create("van", { id: "2", name: "Beach Bum", price: 5600, description: "Beach Bum — фургон, вдохновленный серферами и путешественниками. Он был создан как портативный дом, но с некоторыми интересными функциями, которые Вы не найдете в обычном кемпере.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png", type: "строгий", hostId: "123" })
		server.create("van", { id: "3", name: "Reliable Red", price: 8000, description: "Reliable Red — фургон, созданный для путешествий. Внутри комфортно и уютно, много места, чтобы вытянуться. Есть небольшая кухня, так что вы можете готовить, если вам нужно. В нем Вы почувствуете себя как дома.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png", type: "люкс", hostId: "456" })
		server.create("van", { id: "4", name: "Dreamfinder", price: 5200, description: "Dreamfinder — идеальный фургон для путешествий и приключений. В этом фургоне с потолком высотой 2,1м Вы можете стоять, и в нем достаточно места для головы. Пол выполнен из красивого стеклопластика (GRP), который легко чистить и очень износостойкий. Большое заднее стекло и большие боковые окна делают салон очень светлым и обеспечивают хорошую вентиляцию.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png", type: "простой", hostId: "789" })
		server.create("van", { id: "5", name: "The Cruiser", price: 9200, description: "Cruiser — это фургон для тех, кто любит путешествовать с комфортом и роскошью. Благодаря множеству окон, просторному салону и вместительному багажному отделению Cruiser предлагает прекрасный вид, куда бы Вы ни поехали.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png", type: "люкс", hostId: "789" })
		server.create("van", { id: "6", name: "Green Wonder", price: 5600, description: "С этим фургоном Вы сможете поднять свою жизнь в путешествии на новый уровень. Green Wonder — экологически чистый фургон, который идеально подходит для людей, которые ищут стильный, экологически чистый вид транспорта, способный добраться куда угодно.", imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png", type: "строгий", hostId: "123" })
	},

	routes() {
		this.namespace = "api"

		this.get("/vans", (schema, request) => {
			return schema.vans.all()
		})

		this.get("/vans/:id", (schema, request) => {
			const id = request.params.id
			return schema.vans.find(id)
		})

		this.get("/host/vans", (schema, request) => {
			// Hard-code the hostId for now
			return schema.vans.where({ hostId: "123" })
		})

		this.get("/host/vans/:id", (schema, request) => {
			// Hard-code the hostId for now
			const id = request.params.id
			return schema.vans.where({ id, hostId: "123" })
		})
	}
})