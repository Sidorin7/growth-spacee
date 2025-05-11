import LazyRuTubeEmbed from '../lazyYouTubeEmbed/LazyYouTubeEmbed'
import styles from './../../styles/Core.module.scss'

const InspirationalVideos = ({ titlePage, id, previe }) => {
	return (
		<section className='bg-greenligth'>
			<div className={styles.container}>
				<div className='selfDevelopment__wrapper py-24 mt-24'>
					<div className='flex justify-center '>
						<div className=''>
							<div className='mb-8 '>
								<h2 className='text-3xl font-bold  max-xm:text-2xl max-[500px]:text-xl'>
									{titlePage}
								</h2>
							</div>
							<LazyRuTubeEmbed
								videoId={id}
								previewUrl={previe}
								title='Пример видео с RuTube'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default InspirationalVideos
