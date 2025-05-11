import styles from './../../styles/Core.module.scss'
import Tariff from './Tariff'
const Tariffs = () => {
	return (
		<section className=' hdr pt-20 pb-20 bg-lwhite max-sm:pt-0'>
			<div className={styles.container}>
				<div className='tariffs__wrapper '>
					<div className='flex justify-between gap-5 max-[650px]:flex-col justify-center text-center'>
						<Tariff
							title='Базовый'
							price='0'
							text='Доступ ко всем основным
							
материалам.'
							eng=''
							prog=''
							chatE=''
							crypto=''
							PersTutor=''
						/>
						<Tariff
							title='Премиум'
							price='500'
							text='Все материалы + эксклюзивный
							контент.'
							prog='Прогроммирование'
							chatE='Чат с экспертами'
							eng=''
							crypto=''
							PersTutor=''
						/>
						<Tariff
							title='VIP'
							price='1000'
							text='Полный доступ и персональный
							куратор.'
							prog='Прогроммирование'
							chatE='Чат с экспертами'
							crypto='Крипта'
							PersTutor='Личный куратор'
							eng=''
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Tariffs
