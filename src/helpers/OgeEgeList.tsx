import ege4 from '../pages/ogeEge/img/ege4.png'
import kege from '../pages/ogeEge/img/kege.jpg'
import math from '../pages/ogeEge/img/math.jpg'
import pol from '../pages/ogeEge/img/pol.jpg'
import rege from '../pages/ogeEge/img/rege.png'
import sh from '../pages/ogeEge/img/shool.jpg'

const booksData = {
	Русский: [
		{
			img: rege,
			youtubeUrl: 'https://math-ege.sdamgia.ru/',

			title: 'Решу ЕГЭ',
			description: 'Тысячи заданий с решениями для подготовки к ЕГЭ–2025',
			pdf: '/books/delivering_happiness.pdf',
		},
		{
			img: ege4,
			youtubeUrl: 'https://4ege.ru/russkiy/',

			title: '4ЕГЭ',
			description: 'Пробные работы ЕГЭ по русскому языку.',
			pdf: '/books/the_power_of_subconscious.pdf',
		},
	],
	Математика: [
		{
			img: sh,
			youtubeUrl: 'https://3.shkolkovo.online/ege/inf',
			title: 'Школково Информатика',
			description:
				'Только темы, необходимые для ЕГЭ, в простом и понятном формате - ничего лишнего!',
			pdf: '/books/essentialism.pdf',
		},
		{
			img: math,
			youtubeUrl: 'https://math100.ru/ege-profil2024/',

			title: 'Math100',
			description:
				'ЕГЭ по математике — Профиль 2025. Открытый банк заданий с ответами и решениями.',
			pdf: '/books/good_to_great.pdf',
		},
		{
			img: rege,
			youtubeUrl: 'https://math-ege.sdamgia.ru/',

			title: 'Решу ЕГЭ',
			description: 'Тысячи заданий с решениями для подготовки к ЕГЭ–2025',
			pdf: '/books/delivering_happiness.pdf',
		},
	],
	Информатика: [
		{
			img: kege,
			youtubeUrl: 'https://kompege.ru/',
			title: 'КЕГЭ',
			description:
				'Эмулятор станции КЕГЭ, который позволяет проводить тренировку экзамена по Информатике и ИКТ в компьютерной форме.',
			pdf: '/books/atomic_habits.pdf',
		},
		{
			img: pol,
			youtubeUrl: 'https://kpolyakov.spb.ru/school/ege.htm',

			title: 'Поляков',
			description:
				'Здесь представлены материалы для подготовки к ЕГЭ по информатике.',
			pdf: '/books/miracle_morning.pdf',
		},
		{
			img: sh,
			youtubeUrl: 'https://3.shkolkovo.online/ege/inf',
			title: 'Школково Информатика',
			description:
				'Только темы, необходимые для ЕГЭ, в простом и понятном формате - ничего лишнего!',
			pdf: '/books/essentialism.pdf',
		},
	],
	Физика: [
		{
			img: rege,
			youtubeUrl: 'https://math-ege.sdamgia.ru/',

			title: 'Решу ЕГЭ',
			description: 'Тысячи заданий с решениями для подготовки к ЕГЭ–2025',
			pdf: '/books/delivering_happiness.pdf',
		},
		{
			img: sh,
			youtubeUrl: 'https://3.shkolkovo.online/ege/inf',
			title: 'Школково Информатика',
			description:
				'Только темы, необходимые для ЕГЭ, в простом и понятном формате - ничего лишнего!',
			pdf: '/books/essentialism.pdf',
		},
	],
}

export { booksData }
