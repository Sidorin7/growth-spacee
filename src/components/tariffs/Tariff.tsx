import BtnGreen from '../btnGreen/BtnGreen'
import styles from './../../styles/Core.module.scss'
interface TariffProps {
	title: string
	text: string
	price: string
	eng: string
	prog: string
	chatE: string
	crypto: string
	PersTutor: string
}

const Tariff = ({
	title,
	price,
	text,
	eng,
	prog,
	chatE,
	crypto,
	PersTutor,
}: TariffProps) => {
	return (
		<div className='w-1/3 max-md:w-full '>
			<div>
				<h5 className='text-xl font-normal leading-normal'>{title}</h5>
			</div>
			<div className='text-5xl font-bold max-xm:text-3xl max-md:text-2xl'>
				{price}₽
			</div>
			<div className='mb-10 w-2/3  max-md:w-full'>
				<p className='text-xs font-normal leading-normal mb-2 max-md:text-xss'>
					{text}
				</p>
			</div>
			<div className='max-[650px]:flex justify-center'>
				<BtnGreen text='Подписаться' />
			</div>
			<ul className='mt-12'>
				<li className={styles.tariffLi}>Книги</li>
				<li className={styles.tariffLi}>Подкасты</li>
				<li className={styles.tariffLi}>Видеоуроки</li>
				<li className={styles.tariffLi}>Английский</li>
				<li className={styles.tariffLi}>{eng}</li>
				<li className={styles.tariffLi}>{prog}</li>
				<li className={styles.tariffLi}>{chatE}</li>
				<li className={styles.tariffLi}>{crypto}</li>
				<li className={styles.tariffLi}>{PersTutor}</li>
			</ul>
		</div>
	)
}

export default Tariff
