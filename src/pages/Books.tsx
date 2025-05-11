import { useState } from 'react'
import { booksData } from '../helpers/booksList.tsx'

const Books = () => {
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
	const [selectedBook, setSelectedBook] = useState<{
		img: string
		title: string
		description: string
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

	return (
		<div className=' mx-auto px-4 py-10'>
			<h1 className='text-3xl font-bold mb-8 text-center'>Категории книг</h1>

			{/* Категории */}
			{!selectedCategory ? (
				<div className='max-w-5xl mx-auto grid  md:grid-cols-3 gap-6 lg:grid-cols-3 sm:grid-cols-2'>
					{Object.keys(booksData).map((category, index) => (
						<div
							key={index}
							className='bg-[#e4e6c3] rounded-2xl shadow-md p-16 hover:scale-[1.03] transition-transform cursor-pointer'
							onClick={() => handleCategoryClick(category)}
						>
							<h2 className='text-sm font-semibold text-[#333] text-center'>
								{category}
							</h2>
						</div>
					))}
				</div>
			) : selectedBook ? (
				// Окно с информацией о книге
				<div className='max-w-5xl mx-auto bg-[#e4e6c3] p-6 rounded-2xl shadow-md text-center'>
					<h2 className='text-2xl font-bold text-[#333]'>
						{selectedBook.title}
					</h2>
					<p className='mt-4 text-lg text-gray-700'>
						{selectedBook.description}
					</p>
					<a
						href={selectedBook.pdf}
						download
						className='block mt-6 px-6 py-3 bg-green-600 text-black-1000 text-bold text-base rounded-lg hover:bg-green-700 transition'
					>
						📥 Скачать PDF
					</a>
					<button
						className=' text-lg block ml-10 mb-6 p-5 bg-black-800 text-white rounded-2xl  text-center'
						onClick={() => setSelectedBook(null)}
					>
						Назад к категориям
					</button>
				</div>
			) : (
				// Список книг в категории
				<div className='max-w-full md:max-w-none'>
					<h2 className='text-2xl font-bold mb-4 text-center text-[#333]'>
						{selectedCategory}
					</h2>
					<button
						className=' text-lg block ml-10 mb-6 p-5 bg-black-800 text-white rounded-2xl  text-center'
						onClick={() => setSelectedCategory(null)}
					>
						Назад к категориям
					</button>
					<div className='grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6'>
						{booksData[selectedCategory]?.map((book, index) => (
							<div
								key={index}
								className='bg-white p-6  rounded-xl shadow-md hover:scale-[1.03] transition cursor-pointer'
								onClick={() => handleBookClick(book)}
							>
								<img src={book.img} alt='' className='' />
								<h3 className='text-sm font-semibold text-[#333] mt-4'>
									{book.title}
								</h3>
								{/* <p className='text-gray-600 mt-2 text-sm'>{book.description}</p> */}
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	)
}

export default Books
