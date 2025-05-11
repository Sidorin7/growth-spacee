import margulan from '../pages/podcasts/img/2.jpg'
import disp from '../pages/podcasts/img/disp.jpg'
import miha from '../pages/podcasts/img/miha.jpg'
import proc from '../pages/podcasts/img/proc.jpg'
import proff from '../pages/podcasts/img/proff.jpg'
import ves from '../pages/podcasts/img/ves.jpg'
export type Podcast = {
	title: string
	thumbnail: string // путь до изображения в /public/img/
	youtubeUrl: string
}

export const podcastsData: Podcast[] = [
	{
		title: 'Почему одни пашут за гроши, а другие получают все?',
		thumbnail: margulan,
		youtubeUrl:
			'https://www.youtube.com/watch?v=zV7lrWumc7U&ab_channel=%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%A1%D0%BE%D0%BA%D0%BE%D0%BB%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9',
	},
	{
		title: 'Как ПОМЕНЯТЬ ЖИЗНЬ и почему таксисты такие умные?',
		thumbnail: miha,
		youtubeUrl:
			'https://www.youtube.com/watch?v=C6inw-JM7iM&ab_channel=%D0%9C%D0%B8%D1%88%D0%B0%D0%A2%D0%BE%D0%BA%D0%BE%D0%B2%D0%B8%D0%BD%D0%B8%D0%BD',
	},
	{
		title: 'САМОРАЗВИТИЕ: С чего начать',
		thumbnail: proff,
		youtubeUrl:
			'https://www.youtube.com/watch?v=cQpZ_I5aQGk&ab_channel=%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9%D0%A1%D0%B8%D1%82%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2',
	},
	{
		title: 'ПОЧЕМУ ДИСЦИПЛИНА РЕШАЕТ?',
		thumbnail: disp,
		youtubeUrl:
			'https://www.youtube.com/watch?v=YU1OPKjYSCY&ab_channel=%D0%9F%D1%80%D0%BE%D1%81%D0%B2%D0%B5%D1%89%D1%91%D0%BD%D0%BD%D1%8B%D0%B9',
	},
	{
		title: '1 САМАЯ главная причина, из за которой вы НЕ растете!',
		thumbnail: proc,
		youtubeUrl:
			'https://www.youtube.com/watch?v=6his5HsYmGo&ab_channel=%D0%9C%D0%90%D0%A0%D0%93%D0%A3%D0%9B%D0%90%D0%9D%D0%A1%D0%95%D0%99%D0%A1%D0%95%D0%9C%D0%91%D0%90%D0%99',
	},
	{
		title:
			'Профессор №1: НЕ ПЕЙ это! УЖАСНЫЕ побочные эффекты от известных препаратов.',
		thumbnail: ves,
		youtubeUrl:
			'https://www.youtube.com/watch?v=BHZ57cWEEKE&ab_channel=%D0%9F%D0%BE%D0%B4%D0%BA%D0%B0%D1%81%D1%82%D0%93%D0%BB%D0%B5%D0%B1%D0%B0%D0%A1%D0%BE%D0%BB%D0%BE%D0%BC%D0%B8%D0%BD%D0%B0',
	},
]
