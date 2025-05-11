import BtnGreen from '../btnGreen/BtnGreen'
import styles from './../../styles/Core.module.scss'

const SelfDevelopment = () => {
	return (
		<section>
			<div className={styles.container}>
				<div className='selfDevelopment__wrapper mt-24'>
					<div className='flex justify-between gap-10 max-md:flex-col justify-center'>
						<div className='w-1/2 max-md:w-full text-center'>
							<div className='mb-8 '>
								<h2 className='text-3xl font-bold  max-xm:text-2xl max-sm:text-xl'>
									Саморазвитие
								</h2>
							</div>
							<div className='mb-6 max-md:mb-1'>
								<p className='text-base max-sm:text-xs'>
									Добро пожаловать на наш сайт, где саморазвитие становится
									увлекательным приключением! Здесь ты найдешь все, что нужно
									для роста и развития.
								</p>
							</div>
						</div>
						<div className='w-5/12 max-md:w-full text-center'>
							<div className=''>
								<div className='mt-8 mb-6'>
									<p className='font-normal text-xs text-black-1000 leading-normal '>
										От книг до подкастов — мы собрали лучшие ресурсы, чтобы ты
										мог прокачать свои навыки и знания!
									</p>
								</div>
								<div className='max-md:flex justify-center'>
									<BtnGreen text='Начать сейчас' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default SelfDevelopment
