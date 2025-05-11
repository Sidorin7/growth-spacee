import { useState } from 'react'
import Spinner from '../../components/ui/Spinner'
import { podcastsData } from '../../helpers/podcastsData'

const Podcasts = () => {
	const [loadedImages, setLoadedImages] = useState<number[]>([])

	const handleImageLoad = (index: number) => {
		setLoadedImages(prev => [...prev, index])
	}

	return (
		<div className='max-w-full px-12 py-10  max-md:px-4'>
			<h1 className='text-3xl font-bold mb-8 text-center max-sm:text-2xl'>
				🎧 Подкасты
			</h1>
			<div className='grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-6'>
				{podcastsData.map((podcast, index) => (
					<a
						key={index}
						href={podcast.youtubeUrl}
						target='_blank'
						rel='noopener noreferrer'
						className='block bg-[#e4e6c3] rounded-xl shadow-md hover:scale-[1.03] transition-transform overflow-hidden'
					>
						<div className='relative w-full aspect-video'>
							{!loadedImages.includes(index) && (
								<div className='absolute inset-0 flex items-center justify-center bg-[#e4e6c3]'>
									<Spinner />
								</div>
							)}
							<img
								src={podcast.thumbnail}
								alt={podcast.title}
								className={`w-full h-full object-cover transition-opacity duration-300 ${
									loadedImages.includes(index) ? 'opacity-100' : 'opacity-0'
								}`}
								onLoad={() => handleImageLoad(index)}
							/>
						</div>
						<div className='p-4 text-center'>
							<h2 className='text-xs font-semibold text-[#333]'>
								{podcast.title}
							</h2>
						</div>
					</a>
				))}
			</div>
		</div>
	)
}

export default Podcasts
