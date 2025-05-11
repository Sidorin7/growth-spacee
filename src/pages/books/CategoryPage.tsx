// import { useParams } from '@tanstack/react-router'
// import { booksData } from '../../helpers/booksList.tsx'

// const CategoryPage = () => {
// 	const { category } = useParams()
// 	const formattedCategory = Object.keys(booksData).find(
// 		key => key.toLowerCase().replace(/\s+/g, '-') === category
// 	)

// 	const books = formattedCategory ? booksData[formattedCategory] : []

// 	return (
// 		<div className='p-6 mx-auto max-w-5xl'>
// 			<h1 className='text-3xl font-bold mb-6 text-center'>
// 				{formattedCategory || 'Категория не найдена'}
// 			</h1>

// 			{books.length > 0 ? (
// 				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
// 					{books.map((book, index) => (
// 						<div
// 							key={index}
// 							className='bg-white p-6 rounded-xl shadow-md hover:scale-[1.03] transition cursor-pointer'
// 						>
// 							<img
// 								src={book.img}
// 								alt={book.title}
// 								className='w-full h-40 object-cover mb-4 rounded-md'
// 							/>
// 							<h2 className='text-lg font-semibold text-[#333]'>
// 								{book.title}
// 							</h2>
// 							<p className='text-gray-600 text-sm mt-2'>{book.description}</p>
// 							<a
// 								href={book.pdf}
// 								download
// 								className='block mt-4 px-4 py-2 bg-green-600 text-white text-center rounded-lg hover:bg-green-700 transition'
// 							>
// 								📥 Скачать PDF
// 							</a>
// 						</div>
// 					))}
// 				</div>
// 			) : (
// 				<p className='text-center text-gray-500 text-lg'>
// 					Книг в этой категории пока нет.
// 				</p>
// 			)}

// 			<a
// 				href='/books'
// 				className='block mt-6 text-center text-blue-500 underline'
// 			>
// 				Назад к категориям
// 			</a>
// 		</div>
// 	)
// }

// export default CategoryPage
