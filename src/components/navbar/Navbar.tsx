import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import BtnGreen from '../btnGreen/BtnGreen'
import styles from './../../styles/Core.module.scss'

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

	return (
		<nav className='bg-black-800 w-full relative z-50 overflow-x-hidden'>
			<div className={`${styles.containerNav} max-w-[1400px] mx-auto px-4`}>
				<div className='flex justify-between items-center py-4 flex-wrap gap-4'>
					{/* Логотип */}
					<Link
						to='/'
						className='text-xlm text-green font-semibold whitespace-nowrap text-2xl'
					>
						Growth Space
					</Link>

					{/* Меню - ПК */}
					<ul className='hidden lg:flex gap-6 items-center text-white flex-wrap'>
						<Link to='/books' className={styles.navListItem}>
							Книги
						</Link>
						<Link to='/ege' className={styles.navListItem}>
							ЕГЭ
						</Link>
						<Link to='/podcasts' className={styles.navListItem}>
							Подкасты
						</Link>
						<Link to='/english' className={styles.navListItem}>
							Английский
						</Link>
						<Link to='/programming' className={styles.navListItem}>
							Программирование
						</Link>
						<Link to='/crypto' className={styles.navListItem}>
							Криптовалюта
						</Link>
					</ul>

					{/* Кнопка - ПК */}
					<div className='hidden :block'>
						<BtnGreen text='Начать обучение' />
					</div>

					{/* Бургер-меню - Мобилки */}
					<button
						className='lg:hidden text-white'
						onClick={toggleMenu}
						aria-label='Toggle menu'
					>
						<div className='space-y-1'>
							<span className='block w-6 h-0.5 bg-white' />
							<span className='block w-6 h-0.5 bg-white' />
							<span className='block w-6 h-0.5 bg-white' />
						</div>
					</button>
				</div>
			</div>

			{/* Оверлей */}
			{isMenuOpen && (
				<div
					className='fixed inset-0 bg-black bg-opacity-50 z-40'
					onClick={toggleMenu}
				/>
			)}

			{/* Мобильное меню */}
			<div
				className={`fixed top-0 right-0 h-full w-64 bg-green text-white p-6 transition-transform duration-300 z-50 ${
					isMenuOpen ? 'translate-x-0' : 'translate-x-full'
				}`}
			>
				{/* Кнопка закрытия */}
				<button
					className='absolute top-4 right-4 text-3xl'
					onClick={toggleMenu}
					aria-label='Close menu'
				>
					&times;
				</button>

				<ul className='mt-12 space-y-6 text-base'>
					<Link to='/books' onClick={toggleMenu} className='block'>
						Книги
					</Link>
					<Link to='/ege' onClick={toggleMenu} className='block'>
						ЕГЭ
					</Link>
					<Link to='/podcasts' onClick={toggleMenu} className='block'>
						Подкасты
					</Link>
					<Link to='/english' onClick={toggleMenu} className='block'>
						Английский
					</Link>
					<Link to='/programming' onClick={toggleMenu} className='block'>
						Программирование
					</Link>
					<Link to='/crypto' onClick={toggleMenu} className='block'>
						Криптовалюта
					</Link>
				</ul>

				<div className='mt-8'>
					<BtnGreen text='Начать обучение' />
				</div>
			</div>
		</nav>
	)
}

export default Navbar
