import { useState } from 'react'
import LazyRuTubeEmbed from '../../components/lazyYouTubeEmbed/LazyYouTubeEmbed'
import Spinner from '../../components/ui/Spinner'
import { booksData } from '../../helpers/progList'
import styles from './../../styles/Core.module.scss'
import fb from './img/max.jpg'

const Prog = () => {
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
	const [selectedBook, setSelectedBook] = useState<{
		img: string
		title: string
		description: string
		pdf: string
	} | null>(null)

	const [loadedImages, setLoadedImages] = useState<number[]>([])

	const handleCategoryClick = (category: string) => {
		setSelectedCategory(category)
		setSelectedBook(null)
	}

	const handleBookClick = (book: {
		img: string
		title: string
		description: string
		pdf: string
	}) => {
		setSelectedBook(book)
	}

	const handleImageLoad = (index: number) => {
		setLoadedImages(prev => [...prev, index])
	}

	return (
		<div className='max-w-full px-4 sm:px-6 lg:px-12 py-10'>
			<h1 className='text-3xl font-bold mb-6 text-center max-md:text-2xl max-[600px]:text-xl '>
				Программирование
			</h1>

			<div className='max-w-3xl mx-auto text-center text-base max-sm:text-lg mb-12'>
				Хочешь заняться программированием, но не знаешь, с чего начать? Посмотри
				короткое видео и выбери направление, которое тебе ближе. ⬇️⬇️⬇️
			</div>

			<div className={styles.container}>
				<div className='mb-20 mt-20 flex justify-center'>
					<LazyRuTubeEmbed
						videoId='B4OJbtWbvMU'
						previewUrl={fb}
						title='Пример видео с RuTube'
					/>
				</div>

				<div className='flex justify-center mb-10'>
					<h4 className='text-2xl font-bold max-md:text-xl'>
						А теперь выбирай)
					</h4>
				</div>
			</div>

			{/* Категории */}
			{!selectedCategory ? (
				<div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto'>
					{Object.keys(booksData).map((category, index) => (
						<div
							key={index}
							className='bg-[#e4e6c3] rounded-2xl shadow-md px-8 sm:px-12 py-12 sm:py-16 hover:scale-[1.03] transition-transform cursor-pointer'
							onClick={() => handleCategoryClick(category)}
						>
							<h2 className='text-xl sm:text-2xl font-semibold text-[#333] text-center'>
								{category}
							</h2>
						</div>
					))}
				</div>
			) : (
				// Книги в категории
				<div className='max-w-full px-4 sm:px-6 lg:px-12 py-10'>
					<h2 className='text-3xl font-bold mb-6 text-center max-md:text-2xl'>
						{selectedCategory}
					</h2>

					<div className='flex justify-center mb-6'>
						<button
							className=' text-lg block ml-10 mb-6 p-5 bg-black-800 text-white rounded-2xl  text-center'
							onClick={() => setSelectedCategory(null)}
						>
							Назад к категориям
						</button>
					</div>

					<div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'>
						{booksData[selectedCategory]?.map((book, index) => (
							<a
								href={book.youtubeUrl}
								key={index}
								target='_blank'
								rel='noopener noreferrer'
								className='block rounded-xl shadow-2xl hover:scale-[1.03] transition-transform overflow-hidden cursor-pointer bg-[#e4e6c3]'
								onClick={() => handleBookClick(book)}
							>
								<div className='relative w-full aspect-video'>
									{!loadedImages.includes(index) && (
										<div className='absolute inset-0 flex items-center justify-center bg-[#e4e6c3]'>
											<Spinner />
										</div>
									)}
									<img
										src={book.img}
										alt={book.title}
										className={`w-full h-full object-cover transition-opacity duration-300 ${
											loadedImages.includes(index) ? 'opacity-100' : 'opacity-0'
										}`}
										onLoad={() => handleImageLoad(index)}
									/>
								</div>
								<div className='p-4 text-center'>
									<h3 className='text-lg sm:text-xl font-semibold text-[#333] mt-2'>
										{book.title}
									</h3>
									<p className='text-[#333] mt-2 text-sm sm:text-base opacity-90'>
										{book.description}
									</p>
								</div>
							</a>
						))}
					</div>
				</div>
			)}
		</div>
	)
}

export default Prog
