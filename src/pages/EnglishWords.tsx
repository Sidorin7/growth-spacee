import { collection, getDocs, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import Spinner from '../components/ui/Spinner.tsx'
import { db } from '../helpers/firebase.tsx'
import './../styles/_flip.scss'

interface Word {
	ids: string
	en: string
	ru: string
	category: string
}
const CATEGORIES = ['Путешествия', 'Дом', 'Работа', 'Ресторан', 'Общение']

const EnglishWords = () => {
	const [words, setWords] = useState<Word[]>([])
	const [repeatWords, setRepeatWords] = useState<Word[]>([])
	const [category, setCategory] = useState('Путешествия')
	const [loading, setLoading] = useState(true)
	const [flipped, setFlipped] = useState(false)
	const [currentIndex, setCurrentIndex] = useState(0)
	const [progress, setProgress] = useState(0)

	useEffect(() => {
		const fetchWords = async () => {
			setLoading(true)
			const q = query(
				collection(db, 'words'),
				where('category', '==', category)
			)
			const querySnapshot = await getDocs(q)
			const wordsList = querySnapshot.docs.map(doc => {
				const data = doc.data() as Word // Явно типизируем данные
				return {
					id: doc.id,
					...data,
				}
			})
			setWords(wordsList)
			setRepeatWords([])
			setLoading(false)
			setCurrentIndex(0)
			setProgress(0)
		}

		fetchWords()
	}, [category])

	const filtered = [...words, ...repeatWords]
	const current = filtered[currentIndex] || {}

	const progressStep = filtered.length > 0 ? 100 / filtered.length : 0

	const nextWord = () => {
		// Если есть ещё слова в основном списке
		if (currentIndex + 1 < words.length) {
			setCurrentIndex(prev => prev + 1)
			setProgress(prev => Math.min(prev + progressStep, 100))
		}
		// Если все слова пройдены, но есть повторения — начинаем повторять
		else if (repeatWords.length > 0) {
			setWords(repeatWords)
			setRepeatWords([])
			setCurrentIndex(0)
			setProgress(0)
		}
		// Если всё пройдено — завершаем категорию
		else {
			setProgress(100)
		}
		setFlipped(false)
	}

	const dontKnow = () => {
		// Добавляем текущее слово в список повторений
		setRepeatWords(prev => [...prev, current])
		// Убираем его из основного списка
		setWords(prev => prev.filter((_, index) => index !== currentIndex))

		// Обновляем индекс и прогресс
		setCurrentIndex(prev => Math.min(prev, words.length - 2))
		setProgress(prev => Math.max(prev - progressStep, 0))
		setFlipped(false)
	}

	const handleCategoryChange = (newCategory: string) => {
		setCategory(newCategory)
		setCurrentIndex(0)
		setProgress(0)
		setFlipped(false)
	}

	const getFontSize = (text: string) => {
		if (!text) return 'text-3xl'
		const length = text.length
		if (length > 20) return 'text-xl'
		if (length > 12) return 'text-2xl'
		return 'text-3xl'
	}

	return (
		<div className='p-8 text-center'>
			<h2 className='text-3xl font-bold mb-6 max-md:text-2xl max-sm:text-xlm'>
				Категория: {category}
			</h2>

			{/* Кнопки категорий */}
			<div className='mb-6 flex justify-center gap-2 flex-wrap'>
				{CATEGORIES.map(cat => (
					<button
						key={cat}
						onClick={() => handleCategoryChange(cat)}
						className={`px-6 py-3 text-xs rounded-lg hover:bg-greenligth ${
							cat === category ? 'bg-greenligth text-black' : 'bg-gray-200'
						}`}
					>
						{cat}
					</button>
				))}
			</div>

			{/* Прогресс бар */}
			<div className='w-full max-w-xl mx-auto mb-6'>
				<div
					style={{
						background: '#ddd',
						borderRadius: '9999px',
						height: '24px',
						width: '100%',
						overflow: 'hidden',
						boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.2)',
					}}
				>
					<div
						style={{
							background: '#22c55e',
							height: '100%',
							width: `${progress}%`,
							transition: 'width 0.5s ease-in-out',
						}}
					></div>
				</div>
				<p className='mt-2 text-gray-600 text-sm font-medium'>
					Прогресс: {Math.round(progress)}%
				</p>
			</div>

			{/* Сообщение об окончании */}
			{progress >= 100 ? (
				<div className='text-green-700 font-semibold text-2xl my-6'>
					🎉 Категория завершена!
					<p className='text-lg text-gray-600 mt-2'>
						Выберите следующую категорию:
					</p>
					<div className='flex justify-center gap-4 mt-4 max-xm:flex-col'>
						{CATEGORIES.map(cat => (
							<button
								key={cat}
								onClick={() => handleCategoryChange(cat)}
								className='px-6 py-3 bg-greenligth text-[#333] rounded-xl shadow hover:bg-greenligth transition max-xm:text-xs'
							>
								{cat}
							</button>
						))}
					</div>
				</div>
			) : loading ? (
				<Spinner />
			) : filtered.length === 0 ? (
				<p className='text-xl'>Нет слов в этой категории</p>
			) : (
				<div className='flex justify-center mb-6'>
					<div
						className='flip-card w-1/3  h-96 max-md:w-full'
						onClick={() => setFlipped(!flipped)}
					>
						<div className={`flip-card-inner ${flipped ? 'flipped' : ''}`}>
							<div
								className={`flip-card-front bg-[#e4e6c3] text-[#333] rounded-2xl shadow-lg p-8 flex items-center justify-center font-bold max-md:p-0 ${getFontSize(
									current.en
								)}`}
							>
								{current.en}
							</div>
							<div
								className={`flip-card-back bg-[#e4e6c3] text-[#333] rounded-2xl shadow-lg p-8 flex items-center justify-center font-bold ${getFontSize(
									current.ru
								)}`}
							>
								{current.ru}
							</div>
						</div>
					</div>
				</div>
			)}

			{/* Кнопки действий */}
			{!loading && filtered.length > 0 && progress < 100 && (
				<div className='flex justify-center gap-6 mt-4'>
					<button
						onClick={dontKnow}
						className='px-8 py-4 bg-red-500 text-white text-lg rounded-xl shadow hover:bg-red-600 transition'
					>
						Не знаю
					</button>
					<button
						onClick={nextWord}
						className='px-8 py-4 bg-green-600 text-black text-lg rounded-xl shadow hover:bg-[#a5e990] transition'
					>
						Следующее слово
					</button>
				</div>
			)}
		</div>
	)
}

export default EnglishWords
