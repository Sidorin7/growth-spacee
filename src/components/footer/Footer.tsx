import styles from './../../styles/Core.module.scss'

const Footer = () => {
	return (
		<footer className='bg-black-800 w-full overflow-x-hidden'>
			<div className={`${styles.container} max-w-[1400px] mx-auto px-4`}>
				<div className='py-10'>
					<div className='flex justify-between items-center flex-wrap gap-4 max-sm:flex-col text-center'>
						<div className='text-xl font-semibold text-green whitespace-nowrap'>
							Growth Space
						</div>
						<p className='text-xs text-green'>© 2025 Все права защищены.</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
