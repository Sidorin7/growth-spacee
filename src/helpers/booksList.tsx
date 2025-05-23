import four from './../img/4.webp'
import atomic_habits from './../img/600x600.webp'
import catchs from './../img/catch.webp'
import dg from './../img/dg.webp'
import eat from './../img/eat.webp'
import es from './../img/es.webp'
import father from './../img/father.webp'
import fun from './../img/fun.webp'
import good from './../img/good.webp'
// import hear from './../img/hear.webp'
import magicMorning from './../img/magicMorning.webp'
import nas from './../img/nas.webp'
import pod from './../img/pod.webp'
import por from './../img/por.webp'
import sam from './../img/sam.webp'
import sec from './../img/sec.webp'
import slow from './../img/slow.webp'
import snav from './../img/snav.webp'
import vl from './../img/vl.webp'
import who from './../img/who.webp'
import ya from './../img/ya.webp'
import yes from './../img/yes.webp'
import zero from './../img/zero.webp'
import zov from './../img/zov.webp'

export type Book = {
	img: string
	title: string
	description: string
	pdf: string
}
const booksData: { [category: string]: Book[] } = {
	Психология: [
		{
			img: slow,
			title: 'Думай медленно, решай быстро',
			description:
				'Книга о том, как работает наше мышление: быстрое интуитивное и медленное логическое.',
			pdf: 'https://www.r-5.org/files/books/ethology/human-mind/thinking/Daniel_Kahneman-Thinking_Fast_and_Slow-RU.pdf',
		},
		{
			img: pod,
			title: 'Сила подсознания',
			description: 'Как наше подсознание влияет на решения и поведение.',
			pdf: 'https://www.troykaonline.com/files/pdf/9785041121822.pdf',
		},
		{
			img: ya,
			title: 'Эмоциональный интеллект',
			description: 'Как управлять эмоциями и строить успешные отношения.',
			pdf: 'https://lib.tau-edu.kz/wp-content/uploads/2023/11/%D0%93%D0%BE%D1%83%D0%BB%D0%BC%D0%B0%D0%BD-%D0%94.-%D0%AD%D0%BC%D0%BE%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D0%B8%D0%BD%D1%82%D0%B5%D0%BB%D0%BB%D0%B5%D0%BA%D1%82.-%D0%9F%D0%BE%D1%87%D0%B5%D0%BC%D1%83-%D0%BE%D0%BD-%D0%BC%D0%BE%D0%B6%D0%B5%D1%82-%D0%B7%D0%BD%D0%B0%D1%87%D0%B8%D1%82%D1%8C-%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%B5-IQ.pdf',
		},
		{
			img: vl,
			title: 'Психология влияния',
			description: 'Методы и принципы влияния на людей.',
			pdf: 'https://trinity-mission.ortox.ru/files/2016/03/Chaldini-Psihologiya-vliyaniya.pdf',
		},
		{
			img: yes,
			title: 'Сказать жизни "ДА!"',
			description:
				'Жизнь состоит из сложностей и проблем. Порой у каждого из нас возникает ощущение, что утрачен смысл, опускаются руки и не знаешь, что делать. Знаменитому австрийскому психиатру, психологу и философу Виктору Франклу пришлось пройти сквозь нацистские концлагеря.',
			pdf: 'https://nitsolim.org/R/OrgR/Library/Frankl/FranklDA.pdf',
		},
	],
	Бизнес: [
		{
			img: father,
			title: 'Богатый папа, бедный папа',
			description: 'Основы финансовой грамотности и мышления богатых людей.',
			pdf: 'https://assets.nicepagecdn.com/d6ccfd04/5718591/files/bogatyy-papa-bednyy-papa.pdf',
		},
		{
			img: good,
			title: 'От хорошего к великому',
			description: 'Как компании становятся лидерами в своей отрасли.',
			pdf: 'https://assets.nicepagecdn.com/d6ccfd04/5718591/files/Ot-horoshego-k-velikomu-pdf.pdf',
		},
		{
			img: fun,
			title: 'Доставляя счастье',
			description: 'Философия бизнеса Zappos.',
			pdf: 'https://files.1-mok.ru/vdv/mskobr/cstv/1/Toni_Shei_Dostavlaya_schastie.pdf',
		},
		{
			img: catchs,
			title: 'К черту все, берись и делай!',
			description: 'Как не бояться перемен и добиваться успеха.',
			pdf: 'https://books-online.in/upload/pdf/k-chertu-vsyo-beris-i-delay-pdf.pdf',
		},
		{
			img: zero,
			title: 'От нуля к единице',
			description:
				'Как создать компанию с нуля, привести ее к успеху, сделав лидером рынка?',
			pdf: 'https://makhzan.space/wp-content/uploads/2024/07/%D0%9E%D1%82-%D0%BD%D1%83%D0%BB%D1%8F-%D0%BA-%D0%B5%D0%B4%D0%B8%D0%BD%D0%B8%D1%86%D0%B5.pdf',
		},
	],
	Продуктивность: [
		{
			img: atomic_habits,
			title: 'Атомные привычки',
			description:
				'Как маленькие привычки могут привести к большим изменениям в жизни.',
			pdf: 'https://book2you.net/wp-content/uploads/2023/09/80340315.pdf',
		},
		{
			img: magicMorning,
			title: 'Магия утра',
			description: 'Как утренние привычки могут изменить вашу жизнь.',
			pdf: 'https://msrabota.ru/content/book_docs/osborn_magiya-utra-dlya-finansovoy-svobody_40p3gq_556348_.pdf',
		},
		{
			img: es,
			title: 'Эссенциализм',
			description: 'Как сосредоточиться только на главном.',
			pdf: 'https://www.mann-ivanov-ferber.ru/assets/files/bookparts/hozyain_svoej_zhizni/Essentialism_read_new_stamped.pdf',
		},
		{
			img: snav,
			title: 'Семь навыков высокоэффективных людей',
			description:
				'Во-первых, эта книга излагает системный подход к определению жизненных целей, приоритетов человека. Эти цели у всех разные, но книга помогает понять себя и четко сформулировать жизненные цели.',
			pdf: 'https://gorodnaneve.com/ru/uploads/lib/6626-gorodnaneve-com.pdf',
		},
		{
			img: '',
			title: 'Правило 5 секунд',
			description: 'Как мгновенно принимать решения и действовать.',
			pdf: 'https://kutubxona.samduuf.uz/download/3588',
		},
	],
	Лидерство: [
		{
			img: four,
			title: '4 правила успешного лидера',
			description:
				'Каждая организация и каждый лидер стремятся к успеху. Но почему же тогда достичь его удается лишь немногим? Все дело в том, что зачастую лидеры исповедуют старомодные, отживите свое подходы к лидерству. Между тем по-настоящему успешные лидеры не только иначе смотрят на мир, они и действуют иначе. Стивен Кови дает простые в применении, конкретные стратегии, которые помогут вам изменит!, ваше поведение в качестве лидера. Используя эти инструменты, вы заметите, как улучшится мотивация ваших подчиненных и повысится продуктивность вашей работы.',
			pdf: '/books/leader_without_title.pdf',
		},
		{
			img: sam,
			title: 'Самурай без меча',
			description:
				'Секреты лидерства, которые использовал легендарный японский полководец Хидэёси Тоётоми, чтобы достичь вершины славы, неподвластны времени. ',
			pdf: '/books/laws_of_winners.pdf',
		},
		{
			img: por,
			title: 'Пять пороков команды',
			description: 'Как создавать эффективные команды.',
			pdf: '/books/the_five_dysfunctions_of_a_team.pdf',
		},
		{
			img: eat,
			title: 'Лидеры едят последними',
			description: 'Как создать культуру доверия и успеха.',
			pdf: '/books/leaders_eat_last.pdf',
		},
		{
			img: dg,
			title: 'Джедайские техники',
			description: 'Как контролировать внимание и энергию.',
			pdf: '/books/jedi_techniques.pdf',
		},
	],
	Общение: [
		{
			img: zov,
			title: 'Как завоевывать друзей и оказывать влияние на людей',
			description: 'Лучшее руководство по общению и влиянию.',
			pdf: 'https://library1.info/wp-content/uploads/2024/02/karnegi.-kak-zavoevyvat-druzej.pdf',
		},
		{
			img: nas,
			title: 'Я слышу вас насквозь',
			description: 'Как понимать людей и строить доверие.',
			pdf: 'https://www.mann-ivanov-ferber.ru/assets/files/bookparts/justlisten/listen_read.pdf',
		},
		{
			img: who,
			title: 'Как разговаривать с кем угодно, когда угодно и где угодно',
			description:
				'Ларри Кинг — один из известнейших в США людей — много лет вел популярное ток-шоу телекомпании CNN, быть его гостем считали за честь виднейшие деятели политики, бизнеса, спорта и искусства.',
			pdf: 'https://acterschool.ru/files/kak_razgovarivat_s_kem_ugodno_i_kogda_ugodno.pdf',
		},
		// {
		// 	img: hear,
		// 	title: 'Услышать и понять. Основа доверительных отношений',
		// 	description:
		// 		'Как научиться слушать людей и улучшить благодаря этому все сферы своей жизни.',
		// 	pdf: '/books/science_of_communication.pdf',
		// },
		{
			img: sec,
			title: 'Секреты общения. Магия слов.',
			description:
				'Слова, которыми мы пользуемся, определяют наш успех в жизни – в отношениях, на работе и в бизнесе. Те, кто понимает силу устного слова и как оно влияет на чувства и разум людей, несомненно, примут осознанное решение развивать навыки устной речи.',
			pdf: 'https://book-hive.org/26045-sekrety-obschenija-magija-slov.html',
		},
	],
	// Здоровье: [
	// 	{
	// 		img: '',
	// 		title: 'Китайское исследование',
	// 		description: 'О влиянии питания на здоровье.',
	// 		pdf: 'https://www.r-5.org/files/books/ethology/inequality/v-style/the-china-study/Colin_Campbell-The_China_Study-RU.pdf',
	// 	},
	// 	{
	// 		img: '',
	// 		title: 'Ген долголетия',
	// 		description: 'Как замедлить старение и продлить жизнь.',
	// 		pdf: 'https://sites.icgbio.ru/vogis/download/gen-razvitiya/06-Moskalev-Rus.pdf',
	// 	},
	// 	{
	// 		img: '',
	// 		title: 'Сила сна',
	// 		description: 'Почему сон важен и как его улучшить.',
	// 		pdf: '/books/why_we_sleep.pdf',
	// 	},
	// 	{
	// 		img: '',
	// 		title: 'Ешь, двигайся, спи',
	// 		description: 'Как маленькие изменения приводят к здоровью.',
	// 		pdf: 'https://urss.ru/images/add_ru/187930-1.pdf',
	// 	},
	// 	{
	// 		img: '',
	// 		title: 'Интуитивное питание',
	// 		description: 'Как перестать зависеть от диет и слушать своё тело.',
	// 		pdf: 'https://cdn.img-gorod.ru/nomenclature/24/652/2465291.pdf',
	// 	},
}

export { booksData }
