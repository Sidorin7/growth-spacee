import BtnGray from '../btnGray/BtnGray'
import styles from './../../styles/Core.module.scss'
import book from './img/book.webp'
import podcast from './img/podcast.jpg'
import prog from './img/prog.jpg'
const Addsections = () => {
	return (
		<section className=' hdr pt-6 pb-20 max-[850px]:pt-2 pb-2'>
			<div className={styles.container}>
				<div className='tariffs__wrapper '>
					<div className='flex justify-between gap-5 max-[850px]:flex-col'>
						<div className='w-1/4 max-[850px]:w-full'>
							<div className=' border-3 border-solid border-green rounded-3xl mb-8'>
								<div className='py-12 px-5 flex items-center flex-col'>
									<img className=' rounded-3xl' src={book} alt='' />

									<div className='mb-4 '>
										<h4 className='text-xlm leading-normal font-bold text-black-1000 max-xm:text-xl'>
											Книги
										</h4>
									</div>
									<div className='mb-6'>
										<p className='font-normal text-xs text-black-1000 leading-normal text-center'>
											Погрузись в мир литературы и открой новые горизонты!
										</p>
									</div>
									<BtnGray text='Узнать больше' />
								</div>
							</div>
						</div>
						<div className='w-1/3 max-[850px]:w-full'>
							<div className=' border-3 border-solid border-green rounded-3xl mb-8 '>
								<div className='py-12 px-5 flex items-center flex-col max-[850px]:py-0'>
									<img className=' rounded-3xl ' src={podcast} alt='' />

									<div className='mb-4 '>
										<h4 className='text-xlm leading-normal font-bold text-black-1000 max-xm:text-xl'>
											Подкасты
										</h4>
									</div>
									<div className='mb-6'>
										<p className='font-normal text-xs text-black-1000 leading-normal text-center'>
											Слушай, учись и развивайся с нашими подкастами!
										</p>
									</div>
									<BtnGray text='Узнать больше' />
								</div>
							</div>
						</div>
						<div className='w-2/5 max-[850px]:w-full'>
							<div className=' border-3 border-solid border-green rounded-3xl mb-8'>
								<div className='py-12 px-5 flex items-center flex-col'>
									<img className='rounded-3xl' src={prog} alt='' />

									<div className='mb-4 '>
										<h4 className='text-xlm leading-normal font-bold text-black-1000 max-xm:text-xl'>
											Программирование
										</h4>
									</div>
									<div className='mb-6'>
										<p className='font-normal text-xs text-black-1000 leading-normal text-center'>
											Научись кодить и создавай свои проекты!
										</p>
									</div>

									<BtnGray text='Узнать больше' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Addsections
