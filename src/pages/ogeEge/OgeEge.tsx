import { useState } from 'react'
import Spinner from '../../components/ui/Spinner'
import { booksData } from '../../helpers/OgeEgeList'

const subjectColors = {
	Русский: '#f2c79b', // тёплый персиковый
	Математика: '#f9f9fb', // мягкий зелёный
	Информатика: '#b3d6f2', // светло-голубой
	Физика: '#e4e6c3', // розовато-красный
	Общество: '#d5b3f2', // нежный сиреневый
	Здоровье: '#b3f2ec', // пастельно-бирюзовый
	История: '#f2e2b3', // бледно-жёлтый
}
const getTextColor = (bgColor: string): string => {
	const hex = bgColor.replace('#', '')
	const r = parseInt(hex.substring(0, 2), 16)
	const g = parseInt(hex.substring(2, 4), 16)
	const b = parseInt(hex.substring(4, 6), 16)
	const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
	return luminance > 0.6 ? '#000' : '#fff'
}

const OgeEge = () => {
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
	const [selectedBook, setSelectedBook] = useState<{
		img: string
		title: string
		description: stringW
		pdf: string
	} | null>(null)

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
	const [loadedImages, setLoadedImages] = useState<number[]>([])

	const handleImageLoad = (index: number) => {
		setLoadedImages(prev => [...prev, index])
	}

	return (
		<div className='max-w-full px-12 py-10 max-sm:px-4'>
			<h1 className='text-3xl font-bold mb-8 text-center max-sm:text-2xl'>
				Предметы
			</h1>

			{/* Категории */}
			{!selectedCategory ? (
				<div className='max-w-7xl mx-auto grid grid-cols-2  max-md:grid-cols-2 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1 '>
					{Object.keys(booksData).map((category, index) => (
						<div
							key={index}
							className='bg-[#e4e6c3] rounded-2xl shadow-md px-16 py-20 hover:scale-[1.03] transition-transform cursor-pointer '
							onClick={() => handleCategoryClick(category)}
						>
							<h2 className='text-xl font-semibold text-[#333] text-center'>
								{category}
							</h2>
						</div>
					))}
				</div>
			) : (
				// Список книг в категории
				<div className='max-w-full px-12 py-10 max-md:px-4'>
					<h2 className='text-3xl font-bold mb-8 text-center max-sm:text-2xl'>
						{selectedCategory}
					</h2>
					<button
						className=' text-lg block ml-10 mb-6 p-5 bg-black-800 text-white rounded-2xl  text-center'
						onClick={() => setSelectedCategory(null)}
					>
						Назад к категориям
					</button>
					<div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-6'>
						{booksData[selectedCategory]?.map((book, index) => (
							<a
								href={book.youtubeUrl}
								key={index}
								target='_blank'
								className='block rounded-xl shadow-2xl hover:scale-[1.03] transition-transform overflow-hidden cursor-pointer'
								onClick={() => handleBookClick(book)}
								style={{
									backgroundColor: subjectColors[selectedCategory] || '#4090f7',
									color: getTextColor(
										subjectColors[selectedCategory] || '#e4e6c3'
									),
								}}
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
									<h3 className='text-xl font-semibold text-333 mt-4'>
										{book.title}
									</h3>
								</div>
								<div className='mb-2'>
									<p
										className='text-333 mt-1 text-xss px-1 text-center opacity-90
									'
									>
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

export default OgeEge
