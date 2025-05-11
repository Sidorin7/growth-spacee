import BtnGreen from '../btnGreen/BtnGreen'
import styles from './../../styles/Core.module.scss'
import img from './img/1.jpeg'

const Pump = () => {
	return (
		<section className=' hdr pt-6 pb-20'>
			<div className={styles.container}>
				<div className='bestMaterials__wrapper mt-24'>
					<div className='flex justify-between gap-3 max-[1290px]:flex-col '>
						<div className='w-3/5 max-[1290px]:w-full'>
							<div>
								<button className='py-3 px-3  bg-gray rounded-full border-solid-black text-white text-nowrap text-xs flex items-center'>
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
										Саморазвитие
									</button>
								</button>
							</div>

							<div className='mb-8 mt-3'>
								<h4 className='text-5xl font-bold max-md:text-3xl  max-sm:text-2xl'>
									Прокачай Себя На Полную!
								</h4>
							</div>
							<div className='mb-6'>
								<p className='text-base'>
									Стань мастером своего дела с нашими уникальными ресурсами для
									саморазвития!
								</p>
							</div>
							<div>
								<BtnGreen text='Начать обучение' />
							</div>
						</div>
						<div className='w-2/5 max-[1290px]:w-full'>
							<div className=' '>
								<div className=''>
									<img className='rounded-3xl' src={img} alt='' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Pump
