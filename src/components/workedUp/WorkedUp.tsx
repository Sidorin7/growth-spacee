import BtnGreen from '../btnGreen/BtnGreen'
import styles from './../../styles/Core.module.scss'
const WorkedUp = () => {
	return (
		<section className=' hdr pt-6 pb-20 '>
			<div className={styles.container}>
				<div className='tariffs__wrapper flex justify-center'>
					<div className='flex text-center flex-col max-w-3xl'>
						<div className='mb-32 max-md:mb-10'>
							<h3 className='text-5xl font-bold  max-xm:text-2xl'>
								Прокачай себя!
							</h3>
						</div>
						<div className='mb-32 max-md:mb-6'>
							<p className='text-base max-xm:text-xs'>
								Мы собрали для тебя самые крутые ресурсы для саморазвития!
							</p>
						</div>
						<div className='flex justify-center'>
							<BtnGreen text='Узнать больше' />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default WorkedUp
