import allfr from './../pages/prog/img/allfr.jpg'
import js from './../pages/prog/img/maxresdefault (1).jpg'
import fr from './../pages/prog/img/maxresdefault (2).jpg'
import bk from './../pages/prog/img/maxresdefault (3).jpg'
import vesrt from './../pages/prog/img/maxresdefault.jpg'

export type Book = {
	img: string
	title: string

	youtubeUrl: string
}
const booksData: { [category: string]: Book[] } = {
	Frontend: [
		{
			img: allfr,
			youtubeUrl: 'https://math-ege.sdamgia.ru/',

			title: 'Все о Frontend-разработке за 15 мин',
		},
		{
			img: vesrt,
			youtubeUrl:
				'https://www.youtube.com/watch?v=eMhhl1Wq8JA&ab_channel=%D0%90%D1%80%D0%BE%D0%BA%D0%B5%D0%BD.%D1%80%D1%83',
			title: 'Курс по Верстке сайтов с Нуля для Начинающих',
		},
		{
			img: js,
			youtubeUrl:
				'https://www.youtube.com/watch?v=fcMcf_4PjfI&ab_channel=%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BB%D0%B5%D0%BD%D0%9C%D0%B8%D0%BD%D0%B8%D0%BD',
			title: 'JavaScript c Нуля - Курс для начинающих С ПРАКТИКОЙ',
		},
		{
			img: fr,
			youtubeUrl:
				'https://www.youtube.com/watch?v=37CA8Q4E0Mw&ab_channel=%D0%90%D0%BB%D1%91%D1%88%D0%B0%D0%9F%D0%BE%D0%B3%D1%80%D0%BE%D0%BC%D0%B8%D1%81%D1%82',
			title: 'Какой Frontend фреймворк выбрать новичку?',
		},
	],
	Backend: [
		{
			img: bk,
			youtubeUrl:
				'https://www.youtube.com/watch?v=z43scvZkJl0&ab_channel=%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%91%D1%83%D1%80%D1%82%D0%BE%D0%B2%D0%BE%D0%B9',
			title: 'Что такое бэкенд и как он устроен?',
		},
	],
}

export { booksData }
