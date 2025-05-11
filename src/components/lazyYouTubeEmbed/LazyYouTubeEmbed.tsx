import { useState } from 'react'
import Spinner from '../ui/Spinner'

interface LazyRuTubeEmbedProps {
	videoId: string
	previewUrl: string
	title: string
}

const LazyRuTubeEmbed = ({
	videoId,
	previewUrl,
	title,
}: LazyRuTubeEmbedProps) => {
	const [isLoaded, setIsLoaded] = useState(false)
	const [isIframeLoading, setIsIframeLoading] = useState(false)

	const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`

	return (
		<div className='relative w-full aspect-video bg-gray-200 rounded-xl overflow-hidden'>
			{!isLoaded && (
				<div
					className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer'
					onClick={() => {
						setIsLoaded(true)
						setIsIframeLoading(true)
					}}
				>
					<img
						src={previewUrl}
						alt={title}
						className='absolute inset-0 object-cover w-full h-full z-0'
					/>
					<button className='z-10 bg-black bg-opacity-60 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl hover:bg-opacity-80 transition'>
						▶
					</button>
				</div>
			)}

			{isLoaded && (
				<>
					{isIframeLoading && (
						<div className='absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-30'>
							<Spinner />
						</div>
					)}
					<iframe
						className='absolute inset-0 w-full h-full'
						src={videoUrl}
						title={title}
						frameBorder='0'
						allow='autoplay; encrypted-media; fullscreen; picture-in-picture'
						allowFullScreen
						onLoad={() => setIsIframeLoading(false)}
					></iframe>
				</>
			)}
		</div>
	)
}

export default LazyRuTubeEmbed
