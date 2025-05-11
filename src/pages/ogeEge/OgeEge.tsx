import { useState } from 'react'
import Spinner from '../../components/ui/Spinner'
import { booksData } from '../../helpers/OgeEgeList'

type Book = {
	img: string
	title: string
	description: string
	pdf?: string
	youtubeUrl: string
}

const OgeEge = () => {
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
	const [, setSelectedBook] = useState<Book | null>(null)
	const [loadedImages, setLoadedImages] = useState<number[]>([])

	const handleCategoryClick = (category: string) => {
		setSelectedCategory(category)
		setSelectedBook(null)
	}

	const handleBookClick = (book: Book) => {
		setSelectedBook(book)
	}

	const handleImageLoad = (index: number) => {
		setLoadedImages(prev => [...prev, index])
	}

	return (
		<div className='max-w-full px-6 sm:px-12 py-10'>
			<h1 className='text-3xl font-bold mb-8 text-center max-sm:text-2xl'>
				Предметы
			</h1>

			{/* Категории */}
			{!selectedCategory ? (
				<div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6'>
					{Object.keys(booksData).map((category, index) => (
						<div
							key={index}
							className='bg-[#e4e6c3] rounded-2xl shadow-md px-10 py-14 hover:scale-[1.03] transition-transform cursor-pointer text-center'
							onClick={() => handleCategoryClick(category)}
						>
							<h2 className='text-xl font-semibold text-[#333]'>{category}</h2>
						</div>
					))}
				</div>
			) : (
				<div className='max-w-full'>
					<h2 className='text-3xl font-bold mb-6 text-center max-sm:text-2xl'>
						{selectedCategory}
					</h2>

					<button
						className='ml-4 mb-6 text-[#333] hover:underline underline-offset-4 text-sm'
						onClick={() => setSelectedCategory(null)}
					>
						← Назад к категориям
					</button>

					<div className='grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'>
						{booksData[selectedCategory]?.map((book: Book, index: number) => (
							<a
								href={book.youtubeUrl}
								key={index}
								target='_blank'
								rel='noopener noreferrer'
								className='block rounded-xl shadow-2xl hover:scale-[1.03] transition-transform overflow-hidden cursor-pointer bg-white'
								onMouseEnter={() => handleBookClick(book)}
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
									<h3 className='text-xl font-semibold text-[#333] mt-2'>
										{book.title}
									</h3>
									<p className='text-[#333] mt-1 text-sm opacity-90'>
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
