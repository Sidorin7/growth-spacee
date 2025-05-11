import Offer from '../offer/Offer'
import styles from './../../styles/Core.module.scss'

const WeOffers = () => {
	return (
		<section>
			<div className={styles.container}>
				<div className='selfDevelopment__wrapper mt-24'>
					<div className='grid grid-cols-2 gap-8 max-md:grid-cols-1 gap-0 text-center'>
						<Offer
							title='Английский'
							text='Изучай английский с карточками по
						темам: еда, путешествия и многое
						другое!'
							tbtn='Начать учить'
						/>
						<Offer
							title='ОГЭ/ЕГЭ'
							text='Подготовься к экзаменами и сдай
							все на 100!'
							tbtn='Начать учить'
						/>
						<Offer
							title='Программирование'
							text='Погружайся в мир кода и создавай
							свои проекты!'
							tbtn='Начать учить'
						/>
						<Offer
							title='Книги'
							text='Поменяй своё мышление с помощью
							книг по саморазвитию!'
							tbtn='Начать учить'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default WeOffers
