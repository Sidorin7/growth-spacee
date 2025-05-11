import styles from './../../styles/Core.module.scss'

const EnProg = () => {
	return (
		<section className='bg-greenligth'>
			<div className={styles.container}>
				<div className='pt-20 pb-32'>
					<div className='flex justify-between gap-8 mt-24 max-md1:flex-col'>
						<div className='w-1/2 max-md1:w-full'>
							<div className='bg-white  rounded-3xl '>
								<div className='px-10 py-16 '>
									<div className='mb-4 text-xlm leading-normal font-bold text-black-1000 max-xm:text-xl max-sm:text-sm'>
										<h4>Английский язык</h4>
									</div>
									<p className='font-normal text-xl text-black-1000 leading-normal max-xm:text-xs'>
										Учите английский с помощью карточек! Темы: еда, путешествия,
										о себе и многое другое. Легко и весело!
									</p>
								</div>
							</div>
						</div>
						<div className=' w-1/2 max-md1:w-full'>
							<div className='bg-white  rounded-3xl '>
								<div className='px-10 py-16 '>
									<div className='mb-4 text-xlm leading-normal font-bold text-black-1000 max-xm:text-xl max-sm:text-sm'>
										<h4>Программирование</h4>
									</div>
									<p className='font-normal text-xl text-black-1000 leading-normal max-xm:text-xs'>
										Погрузитесь в мир кода! Узнайте, как создавать свои
										приложения и сайты. Программирование — это круто!
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default EnProg
