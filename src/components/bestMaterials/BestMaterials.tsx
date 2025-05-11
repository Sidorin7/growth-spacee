import BtnGray from '../btnGray/BtnGray'
import styles from './../../styles/Core.module.scss'

const BestMaterials = () => {
	return (
		<header className=' hdr pt-6 pb-20'>
			<div className={styles.container}>
				<div className='bestMaterials__wrapper mt-24'>
					<div className='flex justify-between max-xm:justify-center max-xm:flex-col justify-center'>
						<div className='w-1/2 max-xm:w-full max-md:text-center'>
							<div>
								<button className='py-3 px-3  bg-gray rounded-full border-solid-black text-nowrap text-xs flex   text-black-1000'>
									<div className='inline-flex -mr-8 m-auto'>
										<svg
											width='24'
											height='26'
											viewBox='0 0 24 26'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M16.5938 0.890015L0 17.4838V24.89H7.40625L24 8.29626L16.5938 0.890015ZM21.2109 8.29626L18.7969 10.6869L14.2031 6.09314L16.5938 3.67908L21.2109 8.29626ZM6.60938 22.8978H1.99219V18.2806L12.7969 7.49939L17.3906 12.0931L6.60938 22.8978Z'
												fill='white'
											/>
										</svg>
									</div>
									<button className='py-2 px-4 bg-green rounded-full border-solid-black text-black-1000 text-nowrap text-xs text-black-800 font-bold ml-11'>
										Топ ресурсы
									</button>
								</button>
							</div>

							<div className='mb-8 mt-3'>
								<h2 className='text-5xl font-bold  max-[580px]:text-3xl max-sm:text-2xl'>
									Лучшие материалы
								</h2>
							</div>
							<div className='mb-6'>
								<p className='text-base max-[580px]:text-lg'>
									Мы собрали для тебя самые крутые ресурсы для саморазвития!
								</p>
							</div>
							<div>
								<BtnGray text='Посмотреть все' />
							</div>
						</div>
						<div className='w-1/2 max-xm:flex w-full max-md:text-center flex-col justify-center'>
							<div className=' border-3 border-solid border-green rounded-3xl mb-8 max-md:mb-0'>
								<div className='py-12 pl-12 max-md:pl-2'>
									<div className='mb-4 text-xlm leading-normal font-bold text-black-1000 max-sm:text-xl'>
										<h4>Фильмы</h4>
									</div>
									<p className='font-normal text-xs text-black-1000 leading-normal '>
										Смотри вдохновляющие фильмы о бизнесе и успехе!
									</p>
								</div>
							</div>
							<div className=' border-3 border-solid border-green rounded-3xl'>
								<div className='py-12 pl-12 max-md:pl-2'>
									<div className='mb-4 text-xlm leading-normal font-bold text-black-1000 max-sm:text-xl'>
										<h4>Криптовалюты</h4>
									</div>
									<p className='font-normal text-xs text-black-1000 leading-normal '>
										Узнай все о криптовалютах и как на них заработать!
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default BestMaterials
