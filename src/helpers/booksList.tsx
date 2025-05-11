import four from './../img/4.webp'
import atomic_habits from './../img/600x600.webp'
import catchs from './../img/catch.webp'
import dg from './../img/dg.webp'
import eat from './../img/eat.webp'
import es from './../img/es.webp'
import father from './../img/father.webp'
import fun from './../img/fun.webp'
import good from './../img/good.webp'
import hear from './../img/hear.webp'
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
			pdf: '/books/thinking_fast_and_slow.pdf',
		},
		{
			img: pod,
			title: 'Сила подсознания',
			description: 'Как наше подсознание влияет на решения и поведение.',
			pdf: '/books/the_power_of_subconscious.pdf',
		},
		{
			img: ya,
			title: 'Эмоциональный интеллект',
			description: 'Как управлять эмоциями и строить успешные отношения.',
			pdf: '/books/emotional_intelligence.pdf',
		},
		{
			img: vl,
			title: 'Психология влияния',
			description: 'Методы и принципы влияния на людей.',
			pdf: '/books/influence_psychology.pdf',
		},
		{
			img: yes,
			title: 'Сказать жизни "ДА!"',
			description:
				'Жизнь состоит из сложностей и проблем. Порой у каждого из нас возникает ощущение, что утрачен смысл, опускаются руки и не знаешь, что делать. Знаменитому австрийскому психиатру, психологу и философу Виктору Франклу пришлось пройти сквозь нацистские концлагеря.',
			pdf: '/books/hypnotic_words.pdf',
		},
	],
	Бизнес: [
		{
			img: father,
			title: 'Богатый папа, бедный папа',
			description: 'Основы финансовой грамотности и мышления богатых людей.',
			pdf: '/books/rich_dad_poor_dad.pdf',
		},
		{
			img: good,
			title: 'От хорошего к великому',
			description: 'Как компании становятся лидерами в своей отрасли.',
			pdf: '/books/good_to_great.pdf',
		},
		{
			img: fun,
			title: 'Доставляя счастье',
			description: 'Философия бизнеса Zappos.',
			pdf: '/books/delivering_happiness.pdf',
		},
		{
			img: catchs,
			title: 'К черту все, берись и делай!',
			description: 'Как не бояться перемен и добиваться успеха.',
			pdf: '/books/screw_it_lets_do_it.pdf',
		},
		{
			img: zero,
			title: 'От нуля к единице',
			description:
				'Как создать компанию с нуля, привести ее к успеху, сделав лидером рынка?',
			pdf: '/books/millionaire_mindset.pdf',
		},
	],
	Продуктивность: [
		{
			img: atomic_habits,
			title: 'Атомные привычки',
			description:
				'Как маленькие привычки могут привести к большим изменениям в жизни.',
			pdf: '/books/atomic_habits.pdf',
		},
		{
			img: magicMorning,
			title: 'Магия утра',
			description: 'Как утренние привычки могут изменить вашу жизнь.',
			pdf: '/books/miracle_morning.pdf',
		},
		{
			img: es,
			title: 'Эссенциализм',
			description: 'Как сосредоточиться только на главном.',
			pdf: '/books/essentialism.pdf',
		},
		{
			img: snav,
			title: 'Семь навыков высокоэффективных людей',
			description:
				'Во-первых, эта книга излагает системный подход к определению жизненных целей, приоритетов человека. Эти цели у всех разные, но книга помогает понять себя и четко сформулировать жизненные цели.',
			pdf: '/books/getting_things_done.pdf',
		},
		{
			img: '',
			title: 'Правило 5 секунд',
			description: 'Как мгновенно принимать решения и действовать.',
			pdf: '/books/the_5_second_rule.pdf',
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
			pdf: '/books/how_to_win_friends.pdf',
		},
		{
			img: nas,
			title: 'Я слышу вас насквозь',
			description: 'Как понимать людей и строить доверие.',
			pdf: '/books/i_hear_you.pdf',
		},
		{
			img: who,
			title: 'Как разговаривать с кем угодно, когда угодно и где угодно',
			description:
				'Ларри Кинг — один из известнейших в США людей — много лет вел популярное ток-шоу телекомпании CNN, быть его гостем считали за честь виднейшие деятели политики, бизнеса, спорта и искусства.',
			pdf: '/books/words_that_change_minds.pdf',
		},
		{
			img: hear,
			title: 'Услышать и понять. Основа доверительных отношений',
			description:
				'Как научиться слушать людей и улучшить благодаря этому все сферы своей жизни.',
			pdf: '/books/science_of_communication.pdf',
		},
		{
			img: sec,
			title: 'Секреты общения. Магия слов.',
			description:
				'Слова, которыми мы пользуемся, определяют наш успех в жизни – в отношениях, на работе и в бизнесе. Те, кто понимает силу устного слова и как оно влияет на чувства и разум людей, несомненно, примут осознанное решение развивать навыки устной речи.',
			pdf: '/books/subtle_art_of_not_giving_a_f.pdf',
		},
	],
	Здоровье: [
		{
			img: '',
			title: 'Китайское исследование',
			description: 'О влиянии питания на здоровье.',
			pdf: '/books/china_study.pdf',
		},
		{
			img: '',
			title: 'Ген долголетия',
			description: 'Как замедлить старение и продлить жизнь.',
			pdf: '/books/longevity_gene.pdf',
		},
		{
			img: '',
			title: 'Сила сна',
			description: 'Почему сон важен и как его улучшить.',
			pdf: '/books/why_we_sleep.pdf',
		},
		{
			img: '',
			title: 'Ешь, двигайся, спи',
			description: 'Как маленькие изменения приводят к здоровью.',
			pdf: '/books/eat_move_sleep.pdf',
		},
		{
			img: '',
			title: 'Интуитивное питание',
			description: 'Как перестать зависеть от диет и слушать своё тело.',
			pdf: '/books/intuitive_eating.pdf',
		},
	],
}

export { booksData }
