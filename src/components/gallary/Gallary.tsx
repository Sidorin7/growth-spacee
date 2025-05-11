import styles from './../../styles/Core.module.scss'
import book from './img/book.jpeg'
import podcast from './img/podcast.jpeg'

const Gallary = () => {
	return (
		<section className='pb-24 max-md:pb-6'>
			<div className={styles.container}>
				<div className='bestMaterials__wrapper mt-24  max-md:mt-6'>
					<div className='flex justify-between gap-5  max-md:flex-col'>
						<div className='w-1/2  max-md:w-full'>
							<div>
								<img
									className='h-96 w-full object-cover object-center rounded-lg'
									src={book}
									alt=''
								/>
							</div>
						</div>
						<div className='w-1/2  max-md:w-full'>
							<div>
								<img
									className='h-96 w-full object-cover object-center rounded-lg'
									src={podcast}
									alt=''
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Gallary
